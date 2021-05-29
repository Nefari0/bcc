
require('dotenv').config();
require('dotenv').config({path: __dirname + '/../.env'});
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const productCtrl = require('./controllers/productsController')
const authController = require('./controllers/authController')
const cartController = require('./controllers/cartController')
const auth = require('./middleware/authMiddleware');
const nexmoCtrl = require('./controllers/nexmoController')
const productsController = require('./controllers/productsController');
const userController = require('./controllers/userController')
const axios = require('axios').default
const twilio = require('twilio');
const cors = require('cors');
const path = require('path')

// const Nexmo = require('nexmo')


// const PORT = 4001
const { SESSION_SECRET, CONNECTION_STRING, SERVER_PORT } = process.env;

const app = express()
// app.use(express.json()) // commented out for testing purposes

// ---server was here--- //

// ---------------------//



app.use(
        session({
                resave: true,
                saveUninitialized: false,
                secret: SESSION_SECRET
            }),
            // cors()
        )
        
    // auth end points
    app.post('/auth/register',authController.register)
    app.post('/auth/login',authController.login)
    app.get('/auth/logout',authController.logout)

    // user end points
    app.get('/api/users/all', userController.getAllUsers)
    
    // cart/order end points
    app.get('/api/orders/all', cartController.getAllOrders)
    app.post('/api/orders/users', cartController.addToCart)
    app.get('/api/orders/join', cartController.joinOrders)
    // app.post('/api/orders/users/:product_id', cartController.removeFromCart)

//-------------- twilio end points and requirements------------------//
        
    // const accountSid = ''
    // const authToken = ''
    // const client = (accountSid, authToken)

    // app.get('/send-text', (req,res) => {
        //_GET variables,passed viw query sting
        // const { recipient, textMessage } = req.query

        
        // send text
    //     client.message.create({
    //         body:textMessage,
    //         to:recipient,
    //         from:'number' //from twilio
    //     }).then((message) => console.log(message.body))
    // })
        
    // -------------code below is from twilio--------------------\

    var options = {
    method: 'POST',
    url: 'https://twilio-sms.p.rapidapi.com/2010-04-01/Accounts/%7BAccountSid%7D/Messages.json',
    params: {from: '<REQUIRED>', body: '<REQUIRED>', to: '<REQUIRED>'},
    headers: {
        'x-rapidapi-key': '52760671eamsh2713f40d34d3015p125d3djsn44c5fca3f008',
        'x-rapidapi-host': 'twilio-sms.p.rapidapi.com'
    }
    };

    axios.request(options).then(function (response) {
        console.log('this is response data',response.data);
    }).catch(function (error) {
        console.error('this is a catch error',error);
    });
    
    // --------------------------------------------------------------------
        
    // nexmo end points
    app.get('api/nexmo/confirm', nexmoCtrl.sendUserConfirm)
    
    // products end points
    // app.get('/api/products/all',productCtrl.getAll)
    app.get('/api/products/all',productCtrl.getAll)
    app.get('/api/products/:product_id',productCtrl.getOne)
    app.post('/api/products', productsController.addProduct)
    app.post('/api/products/update/price/:product_id', productsController.updateProductPrice)
    // app.get('/api/products/all/category', productCtrl.getCategory)
    // app.get('/api/products/all/cat', productCtrl)
    // app.get('/api/products/:product_id/category',productCtrl.getOne) <-use this example
    
    // ------server -----
    app.use( express.static( __dirname + '/../build'));
    app.get('*', (req,res) => {
    res.send(path.join(__dirname, '../build/index.html'))
    })


    massive({
        connectionString: CONNECTION_STRING,
        ssl: {
            rejectUnauthorized: false,
        }
    }).then((dbInstance) => {
        app.set('DB',dbInstance);
        console.log('DB connected');
        app.listen(SERVER_PORT, () => console.log(`server ready on ${SERVER_PORT}`))
    });
    