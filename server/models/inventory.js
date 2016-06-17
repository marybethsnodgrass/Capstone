'use strict';

module.exports = function(sequelize, DataTypes) {

    const inventory = sequelize.define('inventory', {
        _id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            notNull: true
        },
        food: {
            type:DataTypes.STRING,
            notNull: true
        },
        purchaseDate: {
            type:DataTypes.DATE,
            notNull: true
        // },
        // dateMax: {
        //     type:DataTypes.INTEGER
        // },
        // dateMin: {
        //     type: DataTypes.INTEGER
        // },
        // location: {
        //     type:DataTypes.STRING
        // },
        // state: {
        //     type: DataTypes.STRING,
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function(models) {
                inventory.belongsTo(models.user);
            }
        }
    });
    return inventory;
};


