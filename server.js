const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
const port = 3000;
const db = require('./config/db');
const cors = require("cors")


//Connect db
db.connect();

const route = require('./routes/index');
const testApi = require('./api/routes/index.route')

// template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
route(app)
testApi(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});