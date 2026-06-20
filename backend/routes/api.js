// backend/routes/api.js ke andar baaki routes ke sath niche add karein
const Order = require('../models/Order');
const Cart = require('../models/Cart'); // Cart khali karne ke liye

router.post('/checkout', async (req, res) => {
    try {
        const { items, total, shippingAddress } = req.body;

        if (!shippingAddress) {
            return res.status(400).json({ success: false, message: "Address is required" });
        }

        // 1. New Order Object build out in cloud/local DB
        const newOrder = new Order({
            items: items,
            totalPrice: total,
            shippingAddress: shippingAddress
        });

        await newOrder.save();

        // 2. Clear current user data collection from database temporary cache
        await Cart.deleteMany({}); 

        res.status(201).json({ success: true, message: "Order processed successfully", orderId: newOrder._index });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});