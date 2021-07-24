const mysql = require("mysql")


const connection = mysql.createConnection({
    host:"bn7pkibeymz3uochbr3v-mysql.services.clever-cloud.com",
    user:"ubp0x7wg4d6yioc8",
    password:"5uxsJsdystxi59TLQwO2",
    database:"bn7pkibeymz3uochbr3v",
    multipleStatements: true
})

module.exports = connection 