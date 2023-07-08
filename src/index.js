const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('./strategies/local');
//routers
const groceriesRoute = require('./routes/groceries');
const marketRoute = require('./routes/market');
const authRoute = require('./routes/auth');

require('./database')

const app = express();
const PORT = 3001;
const memoryStore = new session.MemoryStore();

app.use(express.json());

app.use(cookieParser());
app.use(
    session({
        secret: 'HOTDOG',
        resave: false,
        saveUninitialized: false,
        store: memoryStore
    })
);

app.use((req, res, next) =>{
    console.log(`${req.method}:${req.url}`);
    next();
});

app.use((req, res, next) => {
    console.log(memoryStore);
    next();
})

app.use((passport.initialize()));
app.use(passport.session());

app.use('/groceries', groceriesRoute)
app.use('/market', marketRoute)
app.use('', authRoute)

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));
