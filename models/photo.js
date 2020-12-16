const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres'
  })

const Photo = sequelize.define("photos", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    filepath: DataTypes.STRING,
  }, {timestamps: false});

module.exports = Photo