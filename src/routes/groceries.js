const { Router, response } = require('express');

const router = Router();

router.use((req, res, next) =>{
    if (req.session.user) next ();
    else {
        res.send(401);
    }
});

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
    res.cookie('visited', true, {
        maxAge: 60000,
    });
    res.send(groceriesList);
});

router.get('/:item', (req, res) => {
    console.log(req.cookies);
    const { item } = req.params;
    const groceryItem = groceriesList.find((g) => g.item === item );
    res.send(groceryItem)
});

router.post('/', (req, res) => {
    console.log(req.body);
    groceriesList.push(req.body)
    res.send(201);
});

router.get('/shopping/cart', (req, res) => {
    const { cart } = req.session;
    if (!cart) {
        res.send('You have no cart session');
    } else {
        res.send(cart);
    }
})

router.post('/shopping/cart/item', (req, res) => {
    const { item, quantity } = req.body;
    const cartItem = { item, quantity };
    console.log(cartItem);
    const { cart } = req.session;
    if (cart) {
        req.session.cart.items.push(cartItem);
    } else {
        req.session.cart = {
            items: [cartItem],
        }
    }
    res.send(201);
})

module.exports = router;