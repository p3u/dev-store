import express from 'express';
import axios from 'axios';
import redis from 'redis';
import { dbtoken } from './dbtoken';

const app = express();

let client = redis.createClient(16329, "redis-16329.c10.us-east-1-4.ec2.cloud.redislabs.com");
client.auth(dbtoken, function() {
  client.setex('test', 60, 50);;
});

// if an error occurs, print it to the console
client.on('error', function (err) {
    console.log("Error " + err);
});

app.set('port', (process.env.PORT || 5000));


//  Fetches a single dev
app.get('/api/dev/:gitlogin', function(req, res) {
  const { gitlogin }  = req.params;
  res.send(`fetched dev ${gitlogin}`);
});

// Fetches 8 devs from an organizaiton
app.get('/api/devs/:organization/:pagination', function(req, res) {
  const { organization, pagination } = req.params;
  res.send(`fetched devs from ${organization} after pagination ${pagination}`);
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
