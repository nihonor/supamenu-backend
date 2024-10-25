const express = require('express');
const router = express.Router();
const { Order } = require('../models/order');
const { OrderItem } = require('../models/orderItem');
const _ = require('lodash');


router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.send(orders);
    } catch (ex) {
        console.log(ex);
        res.status(500).send("Error while fetching orders");
    }
});
router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ userId: userId }).populate('orderItem');
        res.send(orders);
    } catch (ex) {
        console.log(ex);
        res.status(500).send("Error while fetching orders for the user");
    }
});



router.post('/create', async (req, res) => {
    try {
        // Create a new OrderItem instance
        let orderItem = new OrderItem(_.pick(req.body, ['product', 'quantity']));
        orderItem = await orderItem.save();

        // Create a new Order instance with the saved OrderItem ID
        let order = new Order({
            orderItem: orderItem._id,
            shippingAddress: req.body.shippingAddress,
            city: req.body.city,
            userId:req.body.userId
        });

        order = await order.save();
        res.status(201).send(order);
    } catch (err) {
        console.log(err);
        res.status(500).send(`Error while creating order: ${err.message}`);
    }
});

module.exports = router;
