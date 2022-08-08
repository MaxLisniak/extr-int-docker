var express = require('express');
var router = express.Router();
const redis = require("redis")

const redisClient = redis.createClient({url: 'redis://redis:6379'});
redisClient.connect();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let numVisits = await redisClient.get('numVisits');
  numVisits = parseInt(numVisits);
  if (isNaN(numVisits)) {
    numVisits = 1;
  }
  numVisits++;
  redisClient.set('numVisits', numVisits);
  return res.render('index', { title: `Number of visits: ${numVisits-1}` });
});

module.exports = router;
