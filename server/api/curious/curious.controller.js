'use strict';

var _ = require('lodash');

var Curious = require('./curious.model');
// Get a single thing
exports.show = function(req, res) {
    return res.send(200, "Curious");
};

exports.add = function(req, res) {


    Curious.create(req.body, function(err, curious) {

        var data = "Email Entered in DwellShare::";

        if (req.body.email) {
            data += "Email : " + req.body.email || "Some idiot didn't specify email";
            data += "Extra Information:";
            data += req.body.data || "";
        }
        var email = require("emailjs");
        var server = email.server.connect({
            user: "dwellshare@gmail.com",
            password: "LonelyMountain321",
            host: "smtp.gmail.com",
            ssl: true,
            port: 465
        });


        // send the message and get a callback with an error or details of the message that was sent
        server.send({
            text: data,
            from: "Dwellshare <dwellshare@gmail.com>",
            to: "Sreevisakh <mail@sreevisakh.com>, Sagar <saagar.gugwad@gmail.com>",
            cc: "Me <dwellshare@gmail.com>",
            subject: "Someone Got Curious"
        }, function(err, message) {
            console.log(err);
            console.log(message);

            if (err) {
                res.json(200, err);
            } else {
                res.json(200, message);
            }
        });


        if (err) {
            return handleError(res, err);
        }

    });
};



function handleError(res, err) {
    return res.send(500, err);
}
