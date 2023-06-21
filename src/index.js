const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const groceriesRoute = require('./routes/groceries');
const marketRoute = require('./routes/market');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use(cookieParser());
app.use(
    session({
        secret: 'HOTDOG',
        resave: false,
        saveUninitialized: false,
    })
);

app.use((req, res, next) =>{
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use('/groceries', groceriesRoute)
app.use('/market', marketRoute)

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
