const { Router } = require('express');

const router = Router();

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

router.get('/', (req, res) => {
    res.send(groceriesList);
});

router.get('/:item', (req, res) => {
    const { item } = req.params;
    const groceryItem = groceriesList.find((g) => g.item === item );
    res.send(groceryItem)
});

router.post('/', (req, res) => {
    console.log(req.body);
    groceriesList.push(req.body)
    res.send(201);
});

module.exports = router;