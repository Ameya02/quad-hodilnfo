// imports
const express = require("express");
const sequelize = require("./config/connection");
const morgan = require("morgan");
const getData = require("./helpers/getData");
const routes  = require("./controllers");
const path = require("path");

// server
const app = express();
const PORT = process.env.PORT || 3001;


// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// use modules in the app
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'bootstrap', 'dist', 'css')));

// routes
app.use("/",routes)

// turn on connection to db and server
sequelize.sync().then(() => {
    console.log("Database connection established");
    console.log("Server connection established");
    getData();
    console.log("Data populated");
  app.listen(PORT, () => console.log("Now listening"));
});

