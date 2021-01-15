module.exports = {
    addToCart: async (req,res) => {
        const { user_id, product_id, quantity } = req.body;
        const product = await req.app.get('DB').add_to_cart([user_id,product_id,quantity]);
        return res.status(200).send(product)
    }
}