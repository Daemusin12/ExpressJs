const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://engrleonelfelezario812:ziAwNQafHGwdZa10@cluster0.ozsczy8.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to DB'))
    .catch((err) => console.log(err));

//ziAwNQafHGwdZa10