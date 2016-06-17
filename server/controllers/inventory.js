'use strict';

const db = require('../models/');

module.exports = {
    addItem (req, res) {
        console.log(req.body.food);
        db.inventory.findOrCreate({where: 
            {food: req.body.food},
            defaults: {
            purchaseDate: req.body.purchaseDate
            // maxDate:
            // minDate:
            // location:
            // state: 
        }})
        .spread(function(inventory, created) {
            res.json(inventory);
            console.log(created);
        })
    },

    getInventory (req, res) {
        db.inventory.findAll({ where: {}, 
        })
        .then((inventory) => {
            res.json(inventory);
        }) 
    }
};