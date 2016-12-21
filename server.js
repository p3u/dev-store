import express from 'express';
import axios from 'axios';
import redis from 'redis';
import { DB_TOKEN } from './tokens';
import singleDevQuery from './queries/SingleDevQuery';
import organizationsDevsQuery from './queries/OrganizationsDevsQuery';
import { gh } from './github';

const app = express();

// // DB Setup
// let client = redis.createClient(16329, "redis-16329.c10.us-east-1-4.ec2.cloud.redislabs.com");
// client.auth(DB_TOKEN, function() {
//   client.setex('test', 60, 50);;
// });
//
// // if an error occurs, print it to the console
// client.on('error', function (err) {
//     console.log("Error " + err);
// });

app.set('port', (process.env.PORT || 5000));


//CORS middleware
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // TODO: Configure only the right hosted domain for CORS
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

//Applying middlewares
app.use(allowCrossDomain);

//  Fetches a single dev
app.get('/api/dev/:gitlogin', function(req, res) {
  const { gitlogin }  = req.params;
  gh.query(singleDevQuery, gitlogin).then(
    function(response) {
      res.status(response.status).json(response.data);
    },
    function(error) {
      res.status(error.response.status).send(error.response.data.message);
    }
  );
});

// Fetches 8 devs from an organizaiton
app.get('/api/devs/:organization/:pagination', function(req, res) {
  const { organization, pagination } = req.params;
  gh.query(organizationsDevsQuery, organization).then(
    function(response) {
      res.status(response.status).json(response.data);
    },
    function(error) {
      res.status(error.response.status).send(error.response.data.message);
    }
  );
});

// Fetches shopping cart NEEDs AUTH
app.get('/api/cart/:userid', function(req, res) {
  const { userid } = req.params;
  res.send(`fetched cart for ${userid}`);
});

// Adds dev to shopping cart NEEDs AUTH
app.post('/api/cart/add/:gitlogin/:userid', function(req, res) {
  const { gitlogin, userid } = req.params;
  res.send(`added ${gitlogin} to ${userid}  cart`);
});

// Deletes dev on a shopping cart NEEDs AUTH
app.delete('/api/cart/delete/:gitlogin/:userid', function(req, res) {
  const { gitlogin, userid } = req.params;
  res.send(`deleted ${gitlogin} from ${userid} cart`);
});

// Updates hours of a user in a shopping cart NEEDs AUTH
app.put('/api/cart/edit/hours/:gitlogin/:hours/:userid', function(req, res) {
  const { gitlogin, hours, userid } = req.params;
  res.send(`updated  ${gitlogin} hours to ${hours} on ${userid} cart`);
});

// Applies coupon to a shopping cart NEEDs AUTH
app.post('/api/cart/apply/coupon/:code/:userid', function(req, res) {
  const { code, userid } = req.params;
  res.send(`applied coupon ${code} to ${userid}`);
});


app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});
