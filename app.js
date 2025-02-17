// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

require('./config/session.config')(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "library-project";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.use( (req, res, next) => {
    console.log("hello world")
    
})

// 👇 Start handling routes here
app.use("/", require("./routes/index.routes"));
app.use("/", require("./routes/auth.routes"));
app.use("/", require("./routes/book.routes"));
app.use("/", require("./routes/author.routes"));


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
