const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

app.use((req, res, next) =>{
    console.log(`${req.method}:${req.url}`);
    next();
});

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

app.get('/groceries/:item', (req, res) => {
    const { item } = req.params;
    const groceryItem = groceriesList.find((g) => g.item === item );
    res.send(groceryItem)
});

app.post('/groceries', (req, res) => {
    console.log(req.body);
    groceriesList.push(req.body)
    res.send(201);
});