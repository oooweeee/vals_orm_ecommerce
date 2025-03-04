const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//  this is where we require the models
app.use(routes);

// sync sequelize models to the database, then turn on the servernode se
sequelize.sync({force:false}).then (()=>{
  app.listen(PORT,()=>{
    console.log(`app.listening port ${PORT} `)
  })
})