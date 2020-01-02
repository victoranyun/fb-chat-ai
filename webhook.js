const request = require('request')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(process.env.PORT || 1337, () => {
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
});

// app.post('/webhook', (req, res) => {
//   console.log(req.body);
//   if (req.body.object === 'page') {
//     req.body.entry.forEach((entry) => {
//       entry.messaging.forEach((event) => {
//         if (event.message && event.message.text) {
//           sendMessage(event);
//         }
//       });
//     });
//     res.status(200).end();
//   }
// });

// function sendMessage(event) {
//   let sender = event.sender.id;
//   let text = event.message.text;

//   request({
//     url: 'https://graph.facebook.com/v2.6/me/messages',
//     qs: {access_token: EAAnqNm9ZAVc8BAPdO3B1OuDu7WnKkLZAoZCgDq7CLRF4DIm89hyi3M3eOysfobZCvAhsSNeQ8zN4LyATh4xlixKWTyF2vMGakfBAgNEwbvt2fulP8BpTYNbBWR1nXRAxlmnaAzuDh9uTnNvhXHtlqkQD2PBwZBKDgvqAHebVYLQZDZD},
//     method: 'POST',
//     json: {
//       recipient: {id: sender},
//       message: {text: text}
//     }
//   }, function (error, response) {
//     if (error) {
//         console.log('Error sending message: ', error);
//     } else if (response.body.error) {
//         console.log('Error: ', response.body.error);
//     }
//   });
// }