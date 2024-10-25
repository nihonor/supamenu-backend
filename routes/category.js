const express = require('express');
const router = express.Router();
const { Rest } = require('../models/restaurant');
const{ Product} = require('../models/product');

router.get('/drink', async (req, res) => {
    try {
      
        const drinks = await    Product.find({}, 'drink');

        if (!drinks) return res.status(404).send('No drinks found');

        res.send(drinks);
    } catch (err) {
        res.status(500).send('Server error');
    }
});
router.get('/starter', async (req, res) => {
    try {
      
        const starter = await Product.find({}, 'starter');

        if (!starter) return res.status(404).send('No drinks found');

        res.send(starter);
    } catch (err) {
        res.status(500).send('Server error');
    }
});
router.get('/appetizer', async (req, res) => {
    try {
      
        const appetizer = await Product.find({}, 'appetizer');

        if (!appetizer) return res.status(404).send('No drinks found');

        res.send(drinks);
    } catch (err) {
        res.status(500).send('Server error');
    }
});
router.get('/dessert', async (req, res) => {
    try {
      
        const dessert = await Product.find({}, 'dessert');

        if (!dessert) return res.status(404).send('No drinks found');

        res.send(dessert);
    } catch (err) {
        res.status(500).send('Server error');
    }
});
router.get('/main', async (req, res) => {
    try {
      
        const main = await Product.find({}, 'main');

        if (!main) return res.status(404).send('No drinks found');

        res.send(main);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;
