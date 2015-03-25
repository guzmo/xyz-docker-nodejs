var path = require('path');
var express = require('express');
var app = express();

app.use('/', express.static(path.join(__dirname, '../dist')));
app.listen(9000);
