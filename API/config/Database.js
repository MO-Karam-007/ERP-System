const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)



const _sequelize = process.env.NODE_ENV == 'development' ? new Sequelize('hr_test', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | c| 'db2' | 'snowflake' | 'oracle' */
}) : new Sequelize('next_vision', process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'  /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | c| 'db2' | 'snowflake' | 'oracle' */
})



module.exports = _sequelize 