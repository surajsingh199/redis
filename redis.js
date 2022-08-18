
const redis = require("redis");



//Connect to redis database to
const redisClient = redis.createClient
(
    18197,// this is default port of redis database 6379
    "redis-18197.c262.us-east-1-3.ec2.cloud.redislabs.com",//Ip address
    { no_ready_check: true }
);
  redisClient.auth("DA45UEX4yN06zPZpx0aUtjUYmNurPSLr", function (err) // redis database password
  {
    if (err) throw err;
  });
  
  redisClient.on("connect", async function () 
  {
    console.log("Connected to Redis..");
  });
const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);
