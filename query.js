const mysql = require('mysql')


const conn = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "root",
    password: "root"
})

conn.connect(err =>{
    if (err) {
        console.log(err)
        return err
    }
    else {
        console.log('Database ------- OK')
    }
})

let query="SELECT * FROM test.users;"

conn.query(query, (err, result) => {
    console.log(err)
    console.log(result)
})