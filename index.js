const express = require("express"); //la línea más importante... es como importar*/
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const boards = require ("./src/boards/boards.routes");
const pins = require ('./src/pins/pins.routes.js')
const users = require ('./src/users/users.routes')
const auth = require("./src/auth/auth.router")
require ('dotenv').config();
console.log(process.env.TOKEN_SECRET)


const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };
const mongo = mongoose.connect(
  process.env.DB_HOST,
  options
);

mongo.then(() => {
  console.log('Mongo ready to accept queries');
});

global.appRoot = path.resolve(__dirname);

const app = express(); //



app.use(cors()); //estos app use registran dependencias.
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");

//todo lo que use boards, que utilice esta ruta (´/...)
app.use("/boards", boards); 
app.use('/pins', pins);
app.use('/users', users);
app.use('/auth', auth)



const start = async () => {
  try {
    app.listen(5000, () => { //debemos hacer un listen que escuche el puerto 
      console.log(`REST API on http://localhost:5000/api`); // se verá bloqueada la terminal porque se está ejecutando.
    });
  } catch (e) {
    console.error(e);
  }
};

start();
