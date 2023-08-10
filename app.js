const express  = require('express');
const app = express();
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/adminRoutes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(adminRoutes);
app.listen(8000);