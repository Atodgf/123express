const Sequelize = require('sequelize')

const sequelize = new Sequelize('test', 'root', '', {
    dialect: "mysql",
    host : "localhost"
})


const Test = require('./users')(sequelize)

module.exports = {
    sequelize: sequelize,
    test: Test
}