import express from 'express';
import axios from 'axios';
import redis from 'redis';
import { DB_TOKEN } from './tokens';
import singleDevQuery from './queries/SingleDevQuery';
import organizationsDevsQuery from './queries/OrganizationsDevsQuery';
import { gh } from './github';
import uuidV4 from 'uuid/v4';
import { promocodes } from './promocodes';
import cacheSetup from 'express-redis-cache';

const app = express();

///////////////////////////////// Redis setup /////////////////////////////////
let dbClient = redis.createClient(16329, "redis-16329.c10.us-east-1-4.ec2.cloud.redislabs.com");
dbClient.auth(DB_TOKEN);

// if an error occurs on redis, print it to the console
dbClient.on('error', function (err) {
    console.log("Error " + err);
});

// Setting up caching on the server
const ONE_DAY_IN_SECS = 86400;
const cache = cacheSetup({ client: dbClient,
                           prefix: 'cache',
                           expire: ONE_DAY_IN_SECS });

cache.on('error', function (err) {
    console.log("Error " + err);
});

//////////////////////////////// Express setup ////////////////////////////////
app.set('port', (process.env.PORT || 5000));
app.set('etag', false);

//CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // TODO: Configure only the right hosted domain for CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

const cacheOnClient = function(req, res, next) {
  if (req.url.substring(0, 8) === '/api/dev' ) {
    res.header('Cache-Control', `public, max-age=${ONE_DAY_IN_SECS * 1000}`);
    res.setHeader('Expires', new Date(Date.now() + (ONE_DAY_IN_SECS * 1000) ).toUTCString());
  }
  next();
}


// Serving static files
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

//Applying middlewares
app.use(allowCrossDomain);
app.use(cacheOnClient);




///////////////////////////////////// API /////////////////////////////////////
// TODO: All these requests could have been abstrected since they return
// information in the same manner

// Fetches a single dev
app.get('/api/dev/:gitlogin', cache.route(), function(req, res) {
  const { gitlogin }  = req.params;
  gh.query(singleDevQuery, gitlogin, false).then(
    function(response) {
      res.status(response.status).json(response.data);
    },
    function(error) {
      res.status(error.response.status).send(error.response.data.message);
    }
  ).catch(e => res.status(500).json({error: e}));
});

// Fetches 8 devs from an organizaiton
app.get('/api/devs/:organization/:endcursor', cache.route(), function(req, res) {
  const { organization, endcursor } = req.params;
  gh.query(organizationsDevsQuery, organization, true, endcursor)
  .then(
    (response) => {
      res.status(response.status).json(response.data);
    },
    (error) => {
      res.status(error.response.status).send(error.response.data.message);
    }
  ).catch(e => res.status(500).json({error: e}));
});


// Creates a new user-key to identify  the shopper
app.post('/api/new/user', function(req, res) {
  const userid = uuidV4();
  dbClient.hset(userid, 'discount', 0, (err, result) => {
    if(result === 1){
      res.status(201).cookie('userid', userid).send(userid);
    }
    else if(err){
      res.status(500).send(err);
    }
  });
});


// Fetches shopping cart NEEDs AUTH
app.get('/api/cart/:userid', function(req, res) {
  const { gitlogin, userid } = req.params;
  dbClient.exists(userid, (err, exists) => {
      if (err){
        res.status(500).send(err);
      }
      else if(!exists){
        res.status(403).cookie('userid', uuidV4())
                       .send("User doesn't exist. New cookie installed");
      }
      else if(exists){
        dbClient.hgetall(userid, (err, result) => {
          if (err) {
            res.status(500).json({success: false, error: err});
          }
          res.status(200).json({success: true, cart: result});
        });
      }
    });
});

// Adds dev to shopping cart NEEDs AUTH
// TODO: refactor duplicate code for add, delete, update cart
app.post('/api/cart/add/:userid/:gitlogin', function(req, res) {
  const { gitlogin, userid } = req.params;
  dbClient.exists(userid, (err, exists) => {
      if (err){
        res.status(500).send(err);
      }
      else if(!exists){
        res.status(403).cookie('userid', uuidV4())
                       .send("User doesn't exist. New cookie installed");
      }
      else if(exists){
        dbClient.hset(userid, gitlogin, 1, (err, result) => {
          if( err ){
            res.status(500).json( {success: false, error: err} )
          }
          else {
            let developer = {}
            developer[gitlogin] = 1;
            res.status(201).json( {success: true, developer: developer });
          }
        });
      }
    });
});

// Deletes dev on a shopping cart NEEDs AUTH
app.delete('/api/cart/delete/:userid/:gitlogin', function(req, res) {
  const { gitlogin, userid } = req.params;
  dbClient.exists(userid, (err, exists) => {
      if (err){
        res.status(500).json( {success: false, error: err} )
      }
      else if(!exists){
        res.status(403).cookie('userid', uuidV4())
                       .send("User doesn't exist. New cookie installed");
      }
      else if(exists){
        dbClient.hdel(userid, gitlogin, (err, result) => {
          if( err ){
            res.status(500).json( {success: false, error: err} )
          }
          else {
            res.status(200).json({success: true, devId: gitlogin});
          }
        });
      }
    });
});

// Updates hours of a user in a shopping cart NEEDs AUTH
app.put('/api/cart/edit/hours/:userid/:gitlogin/:hours', function(req, res) {
  const { gitlogin, hours, userid } = req.params;
  dbClient.exists(userid, (err, exists) => {
      if (err){
        res.status(500).json( {success: false, error: err} )
      }
      else if(!exists){
        res.status(403).cookie('userid', uuidV4())
                       .send("User doesn't exist. New cookie installed");
      }
      else if(exists){
        dbClient.hset(userid, gitlogin, hours, (err, result) => {
          if(err){
            res.status(500).json( {success: false, error: err} )
          }
          res.status(200).json( {success: true, hours: hours, devId: gitlogin} )
        });
      }
    });
});

// Applies coupon to a shopping cart NEEDs AUTH
app.post('/api/cart/apply/coupon/:code/:userid', function(req, res) {
  const { code, userid } = req.params;
  if ( !(promocodes.hasOwnProperty(code)) ) {
    res.status(200).json({success: true, message: "This code is not valid", code: false})
    return;
  }

  dbClient.exists(userid, (err, exists) => {
      if (err) {
        res.status(500).send(err);
      }
      else if(!exists) {
        res.status(403).cookie('userid', uuidV4())
                       .send("User doesn't exist. New cookie installed");
      }
      else if(exists){
        const codeData = promocodes[code]
        dbClient.hmset(userid, 'discount', codeData.amount, (err, result) => {
          if(err) {
            res.status(500).json( {success: false, error: err} );
          }
          else {
            res.status(200).json( {success: true, discount: codeData.amount, code: code} );
          }
        });
      }
    });
});


app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});
