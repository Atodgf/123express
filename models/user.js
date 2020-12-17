const Photo = require('./photo')
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres'
  })


const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {timestamps: false});

User.hasMany(Photo, {as: 'photos', foreignKey:'user_id'})

module.exports = User