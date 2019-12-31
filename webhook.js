const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 1337, () => console.log('webhook server is now listening on port 1337 in %s mode', app.settings.env));

// basic fb validation
app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'funmblr') {
  	console.log('WEBHOOK_VERIFIED');
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.status(403).end();
  }
});

// app.get('/webhook', (req, res) => {
//   let VERIFY_TOKEN = "funmblr"
//   let mode = req.query['hub.mode'];
//   let token = req.query['hub.verify_token'];
//   let challenge = req.query['hub.challenge'];
    
//   if (mode && token) {
//     if (mode && token === VERIFY_TOKEN) {
//       console.log('WEBHOOK_VERIFIED');
//       res.status(200).send(challenge);
//     } else {
//       res.sendStatus(403).end();      
//     }
//   }
// });

// for messages
app.post('/webhook', (req, res) => {
  console.log(req.body);
  if (req.body.object === 'page') {
    req.body.entry.forEach((entry) => {
      entry.messaging.forEach((event) => {
        if (event.message && event.message.text) {
          sendMessage(event);
        }
      });
    });
    res.status(200).end();
  }
});