var path = require('path');
var express = require('express');
var app = express();

// You probably want to change 'dist/' to '../dist/' for production
app.use('/', express.static(path.join(__dirname, 'dist/')));
app.listen(9000);
