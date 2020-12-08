const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define('test', {
        id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false 
        },
        name : {
            type : Sequelize.STRING,
            allowNull : false 
        },
        surname : {
            type : Sequelize.STRING,
            allowNull : false 
        }
    }, {
        timestamps : false
    });
}