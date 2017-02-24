// server.js

// Import Modules =========================================

const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

// Configuration ==========================================

    // Set port
    const port = process.env.PORT || 8080;

    // Set Database
    const mongoose = require('mongoose');
    const db       = require('./config/db');

    mongoose.connect(db.url);


    // application ========================================

    // get everything for the body (POST) parameters
    // parse application/json
    app.use(bodyParser.json());
    // parse application/vnd.api+json
    app.use(bodyParser.json({ type: 'application/vnd.api+json'}));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // override with X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
    app.use(methodOverride('X-HTTP-Method-Override'));
    // set the static files location
    app.use(express.static(__dirname + '/public'));

    // routes =============================================
    require('./app/routes')(app);

// start the app ==========================================
app.listen(port, function(){
    console.log('Magic happens on port', port);
});

exports = module.exports = app;
