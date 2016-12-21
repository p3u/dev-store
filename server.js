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


app.listen(app.get('port'), function(){
  console.log('Server listening on port: ', app.get('port'));
});
