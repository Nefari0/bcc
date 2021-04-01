module.exports = {
    addToCart: async (req,res) => {
        const { user_id, product_id, quantity } = req.body;
        const product = await req.app.get('DB').add_to_cart([user_id,product_id,quantity]);
        return res.status(200).send(product)
    },

    getAllUserOrders: async (req,res) => {
        const orders = await req.app.get('DB').get_all_user_orders();
        return res.status(200).send(orders)
    },

    getAllOrders: async (req,res) => {
        const orders = await req.app.get('DB').get_all_orders();
        return res.status(200).send(orders)
    },

    joinOrders: async (req,res) => {
        const orders = await req.app.get('DB').join_user_orders2();
        return res.status(200).send(orders)
    },
}