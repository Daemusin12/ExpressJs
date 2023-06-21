const { Router } = require('express');

const router = Router();

let superMarkets = [
    {
        store: 'Whole Foods',
    },
    {
        store: 'Trader Joes',
    }
];

router.get('/', (req, res) => {
    res.send(superMarkets);
});

module.exports = router;