import mysql2 from 'mysql2/promise'

const con = await mysql2.createConnection({
    Host
})