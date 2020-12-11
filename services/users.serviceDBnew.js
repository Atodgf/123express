const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    host: 'localhost',
    dialect:'postgres'
  });

const User = sequelize.define("users", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
  },{timestamps: false});
  
  class UserServicesDB {

    async createUser(body) {
        await User.create({id:body.id, name: body.name, surname: body.surname});
        return ('Пользователь успешно создан!')
    }

    async getUsers() {
        const users = await User.findAll();
        return(users);
    }

    async getOneUser(id) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
        console.log('Not found!');
        } else {
        return(await user.dataValues); 
        }
    }

    async updateUser(id, body) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
        console.log('Not found!');
        } else {
        user.name = body.name
        user.surname = body.surname
        await user.save({ fields: ['name', 'surname'] })
        return ('Пользователь успешно обновлён!')
        }
    }

    async deleteUser(id) {
        const user = await User.findOne({ where: { id: id } });
        if (user === null) {
        console.log('Not found!');
        } else {
            await user.destroy()
            return ('Пользователь успешно удалён!')
        }
    }
  }
module.exports = new UserServicesDB()
  



















































// const { Sequelize, Model, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
  
//   class User extends Model {}
//   User.init({
//     name: DataTypes.STRING,
//     surname: DataTypes.STRING
//   }, { sequelize, modelName: 'user' });



// class UserServiceDB {
    

//     async getUsers (req, res) {
//         await sequelize.sync();
//         const users = await User.findAll();
//         console.log(users.every(user => user instanceof User)); 
//         console.log("All users:", JSON.stringify(users, null, 1))
//         }

//     // async getOne(req, res) {
//     //     const id = req.params.id
//     //     const user = await db.query(`SELECT * FROM person where id = $1`, [id])
//     //     res.json(user.rows[0])
//     // }

//     async createUser(req, res) {
//         const {id, name, surname} = req.body
//         console.log(id, name, surname)
//         const jane = await User.create({ firstName: "Jane", lastName: "Doe" });
//         console.log("Jane's auto-generated ID:", jane.id);
//     }

//     // async updateUser(req, res) {
//     //     const id = req.params.id
//     //     const {name, surname} = req.body
//     //     await db.query(
//     //         `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
//     //         [name,surname,id])
//     //     res.json('Данные пользователя успешно обновлены!')
//     // }

//     // async deleteUser(req, res) {
//     //     const id = req.params.id
//     //     await db.query(`DELETE FROM person where id = $1`, [id])
//     //     res.json('Пользователь успешно удалён!')
//     // }

// }

// module.exports = new UserServiceDB()
  
    
