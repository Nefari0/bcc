const bcrypt = require('bcrypt')

module.exports = {
    register: async (req,res) => {
        const {email, password, phone } = req.body;
        const DB = req.app.get('DB')
        const result = await DB.get_site_user([email])
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('this email is already being used');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password,salt);
        const registeredUser= await DB.register_site_user([email, hash, phone])
        const user = registeredUser[0];
        req.session.user = { isAdmin: user.is_admin, email: user.email, id: user.user_id };
        return res.status(201).send(req.session.user)
    },

    login: async (req,res) => {
        const { email, password } = req.body;
        const foundUser = await req.app.get('DB').get_site_user([email]);
        const user = foundUser[0];
        console.log('this is user',foundUser)
        if (!user) {
            return res.status(401).send("user not found")
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        console.log('isAuthenticated',isAuthenticated)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        req.session.user = { isAdmin: user.is_admin, id: user.user_id, email: user.email, username: user.user_name};
            return res.status(200).send(req.session.user)
    },

    logout: async (req,res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }
};