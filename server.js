const express = require('express')
const app = express()
const Sequelize = require('sequelize');

//Container Port
const portt = 3050

app.use(express.urlencoded())
app.use(express.static("public_index"));
app.listen(portt, () => console.log('App listening on portt ' + portt))



  
  // CREATE DB AND CONNECTION
  const sequelize = new Sequelize('data', 'root', 'root', {
      host: '172.20.0.11',
      dialect: 'mysql',
      port: '3306'
    });
  //OR 
  // const sequelize = new Sequelize('mysql://bhd:root@172.20.0.10:3306/data'); 

sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});


const Model = Sequelize.Model;

//This will create a TABLE if not exists
class User extends Model {}
User.init({
  email: {
    type: Sequelize.STRING,
    allowNull: false
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'emailcat',
  freezeTableName: true //to Dont PLuralrize the name of the table (userbhd + s)
  // options
});

sequelize.sync()
// User.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return User.create({
//     name: 'John',
//     email: 'John@eu.com',
//     msg: 'msg'
//   });
// });


app.post('/submitcat', (req, res) => {
  console.log(req.body);
    // Create a neW User
  User.create({ email: req.body.email }).then(newuser => {
    console.log("User ID:", newuser.id);
  });
res.redirect('/');
})
