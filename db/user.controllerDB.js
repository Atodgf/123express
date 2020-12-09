const db = require('./db')
class UserControllerDB {

    async createUser(req, res) {
        const {id, name, surname} = req.body
        await db.query(`INSERT INTO person (id, name, surname) values($1, $2, $3) RETURNING * `, [id, name, surname])
        res.json('Пользователь успешно создан!')
    }


    async getUsers(req, res) {
        const users = await db.query(`SELECT * FROM person`)
        res.json(users.rows)
    }

    async getOne(req, res) {
        const id = req.params.id
        const user = await db.query(`SELECT * FROM person where id = $1`, [id])
        res.json(user.rows[0])
    }


    async updateUser(req, res) {
        const id = req.params.id
        const {name, surname} = req.body
        await db.query(
            `UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *`,
            [name,surname,id])
        res.json('Данные пользователя успешно обновлены!')
    }

    async deleteUser(req, res) {
        const id = req.params.id
        await db.query(`DELETE FROM person where id = $1`, [id])
        res.json('Пользователь успешно удалён!')
    }

}

module.exports = new UserControllerDB()