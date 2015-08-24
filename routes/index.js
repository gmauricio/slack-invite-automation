var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config');

router.get('/', function(req, res) {
  res.render('index', { community: config.community });
});

router.post('/invite', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.body.email) {
    request.post({
        url: 'https://'+ config.slackUrl + '/api/users.admin.invite',
        form: {
          email: req.body.email,
          token: config.slacktoken,
          set_active: true
        }
      }, function(err, httpResponse, body) {
        if (err) return res.send(JSON.stringify({ok: false, error: 'Ha ocurrido un error desconocido, por favor intenta mas tarde.'}));
        res.send(body);
      });
  } else {
    res.status(400).send(JSON.stringify({ok: false, error: 'El email es requerido'}));
  }
});

module.exports = router;
