const express = require('express');
const path = require('path');
const bodyParser = require('body-parser';
let app = express();



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api',require('./api/index'));


let server = app.listen(9090,function(){});