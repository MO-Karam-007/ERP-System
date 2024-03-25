const { Sequelize } = require('sequelize');
// const pg = require('pg')
const { db } = require("@vercel/postgres");
// Option 3: Passing parameters separately (other dialects)

// console.log(process.env.POSTGRES_URL);
const _sequelize = new Sequelize(process.env.TINYTURTLE_URL.replace('<PASSWORD>', process.env.TINYTURTLE_PASSWORD))
//     connectionString: process.env.POSTGRES_URL,
// })

module.exports = _sequelize

// db.connect().then(() =>
// {
//     console.log(`Lol`);
// })


// _sequelize.query('SELECT NOW()', (err, res) =>
// {
//     console.log(err, res)
//     pool.end()
// })
// const _sequelize = process.env.NODE_ENV == 'development' ? new Sequelize('hr_test', process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | c| 'db2' | 'snowflake' | 'oracle' */
// }) : new Sequelize('next_vision', process.env.DB_USER, process.env.DB_PASSWORD, {
//     host: 'localhost',
//     dialect: 'postgres'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | c| 'db2' | 'snowflake' | 'oracle' */
// })



// module.exports = _sequelize 