var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');

router.get('/', function (req, res) {
    console.log("Got post for the sos button"); 
    var send = require('gmail-send')({
    //var send = require('../index.js')({ 
      user: 'testingu62@gmail.com',
      // user: credentials.user,                  // Your GMail account used to send emails 
      pass: 'testing123',
      // pass: credentials.pass,                  // Application-specific password 
      to:   'archittamrakar007gmail.com',
      // to:   credentials.user,                  // Send to yourself 
                                               // you also may set array of recipients: 
                                               // [ 'user1@gmail.com', 'user2@gmail.com' ] 
      // from:    credentials.user             // from: by default equals to user 
      // replyTo: credentials.user             // replyTo: by default undefined 
      subject: 'SOS Alarm ',
      text:    'there is an emergncy please take the ambulance',         // Plain text 
      html:    '<b style="color:rgb(0, 255, 55)">Please respond fast</b>'            // HTML 
    });
    send({}, function (err, res) {
      console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
    });
    console.log('* [example 1.2] sending test email');

    return res.render('sos-success', {});
    // return res.status(200).send({
    //     "message": "the mail has been send to"
    // });
});

router.post('/', function (req, res) {
    // nonsos using api to maintain clean separation between layers
    // request.post({
    //     url: config.apiUrl + '/users/sos',
    //     form: req.body,
    //     json: true
    // }, function (error, response, body) {
    //     console.log("Got Success for the sos button");
    //     if (error) {
    //         return res.render('sos', { error: 'An error occurred' });
    //     }
    //     else if(response.statusCode == 200){
    //         return res.renderFile('success', {email:email});
    //     }

    //     else if (response.statusCode !== 200) {
    //         return res.render('sos', {
    //             error: response.body,
    //             firstName: req.body.firstName,
    //             lastName: req.body.lastName,
    //             username: req.body.username,
    //             roomnum: req.body.roomnum,
    //             floor: req.body.floor
    //         });
    //     }

    //     // return to login page with success message
    //     req.session.success = 'Registration successful';
    //     return res.redirect('/login');
    // });
});

module.exports = router;