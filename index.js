const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://lola:lola1234@ds111791.mlab.com:11791/lunapato')


const app = express();
app.use(bodyParser.json());

const ruta = require('./routes/personasRoutes');
ruta(app);

app.listen(5000);
