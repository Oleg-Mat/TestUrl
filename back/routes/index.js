const express = require('express');
const router = express.Router();
const redis = require('redis');
const client = redis.createClient();


router.post('/getnewurl', (req, res) => {
  try {
    let url = req.body.url;
    if (url.includes('http://cryptoeye.eu/')) {
      url = url.replace('http://cryptoeye.eu/', '');
      newUrl = '/' + url;
      //Redis
      client.on("error", function (err) {
        console.log("Error: " + err);
      });
      // Запись ,прочтение.
      client.set('url', newUrl, function (err, data) {
        client.get('url', function (err, data) {
          client.quit();
          console.log('URL: ' + data);
        });
      });
      res.json({ url: newUrl })
    } else {
      res.json({ message: 'Ваша ссылка должна содержать * http://cryptoeye.eu/ *' })
    }
  } catch (err) {
    res.status(500);
  }
});

module.exports = router;
