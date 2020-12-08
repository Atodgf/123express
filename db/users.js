const Sequelize = require('sequelize')

module.exports = function (sequelize) {
    return sequelize.define('test', {
        Id : {
            type : Sequelize.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false 
        },
        Name_id : {
            type : Sequelize.STRING,
            allowNull : false 
        },
        Surname_id : {
            type : Sequelize.STRING,
            allowNull : false 
        }
    }, {
        timestamps : false
    });
}