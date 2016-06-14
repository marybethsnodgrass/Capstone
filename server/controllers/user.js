'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models/');

module.exports = {
    createUser (req, res) {
        if (req.body.password === req.body.verify) {
            db.user.findOrCreate({where: {email: req.body.email}, defaults: {
                userType: req.body.userType,
                phone: req.body.phone,
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip,
                password: db.user.generateHashPass(req.body.password)}
            })
            .spread(function(user, created) {
                res.json(user);
                console.log(created);
            })
        } else {
            res.status(200).send("passwords do not match");
        }
    },
    loginUser (req, res) {
        db.user.findOne({where: {email: req.body.email}})
        .then((user) => {
            res.send(user);
        })  
    },
    logout (req, res) {
        req.session.regenerate(err => {
            if (err) throw err;
            res.redirect('/#/home')
        })  
    },
    checkLogin (req, res) {
        if (req.user) {
            res.send(true)
        } else {
            res.send(false)
        } 
    }
};
            
