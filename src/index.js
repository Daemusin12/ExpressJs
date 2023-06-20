const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));

app.get('/groceries', (req, res) => {
    res.send([
        {
            item: 'Milk',
            quantity: 2,
        },
        {
            item: 'Egg',
            quantity: 12,
        },
        {
            item: 'Tocino',
            quantity: 1,
        },
    ]);
});