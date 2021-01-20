module.exports = {
    getAllUsers: async (req,res) => {
        const users = await req.app.get('DB').get_all_users();
        return res.status(200).send(users)
    },
}