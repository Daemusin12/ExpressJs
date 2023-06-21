const { Router } = require('express');

const router = Router();

router.use((req, res, next) =>{
    if (req.session.user) next ();
    else {
        res.send(401);
    }
});

let superMarkets = [
    {
        id: 1,
        store: 'Whole Foods',
        miles: .5,
    },
    {
        id: 2,
        store: 'Trader Joes',
        miles: 1.3,
    }
];

router.get('/', (req, res) => {
    const { miles } = req.query;
    const parsedMiles = parseFloat(miles);
    if (!isNaN(parsedMiles)) {
        const filteredStores = superMarkets.filter((s) => s.miles <= parsedMiles);
        res.send(filteredStores);
    } else res.send(superMarkets);
    res.send(superMarkets);
});

module.exports = router;