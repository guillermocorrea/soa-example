/**
 * Created by guillermo on 06/09/2014.
 */
'use strict';

var express    = require('express');
var app        = express();
var calculator = require('./routes/calculator');
var Path = require('path');

var port = process.env.PORT || 8080;

var p = Path.join(__dirname, '../client');
console.log('__dirname: ' + p);

// app.use(favicon(p + '/favicon.ico'));
app.use(express.static(p));


// Configure routes
app.use('/api/v1', calculator);

app.listen(port);
console.log('Magic happens on port ' + port);