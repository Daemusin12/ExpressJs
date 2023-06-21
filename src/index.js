const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}!`));

let groceriesList = [
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
];

app.get('/groceries', (req, res) => {
    res.send(groceriesList);
});

app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceriesList.push(req.body)
    res.send(201);
});