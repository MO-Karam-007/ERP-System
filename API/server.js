
const app = require('./app')

const port = process.env.PORT || 3030;
const _sequelize = require('./config/Database')

const relationAssociation = require('./utils/associations')


console.log(`FFFFFFFFFFfff`);
console.log(typeof []);

relationAssociation();

_sequelize.sync()

  .then(() =>
  {
    console.log(`Database is on`);
  })
  .catch(err =>
  {
    console.log(`Not connected`, err);
  })



app.listen(port, () =>
{
  console.log(`http://localhost:${port}`);
})

