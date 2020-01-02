const verifyWebhook = (req, res) => {
  if (req.query['hub.mode'] && req.query['hub.verify_token'] === 'funmblr') {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.status(403).end();
  }
};

module.exports = verifyWebhook