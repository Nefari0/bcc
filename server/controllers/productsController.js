module.exports = {
    getAll: async (req,res) => {
        const product = await req.app.get('DB').get_products();
        return res.status(200).send(product),console.log('this is products',product[0].photo_url)
    },

    getOne: ( req,res,next ) => {
        const DB = req.app.get('DB');
        const {product_id} = req.params

        DB.get_one_product(product_id)
            .then( product => res.status(200).send( product ) )
            .catch( err => {
                res.status(500).send({errorMessage: "uh oh"});
                console.log(err)
            })
    },

    getCategory: (req,res,next) => {
        const DB = res.app.get('DB');
        const { category } = req.params
        
        DB.get_category(category)
        .then(category => res.status(200).send( category ))
        .catch( err.status(500).send({errorMessage: "uh oh"}))
    },

    addProduct: async (req,res,next) => {
        const DB = req.app.get('DB')
        const {name,product_description,price,category,photo_url} = req.body
        // const {info} = req.body //this line for testing
        const newItem = await DB.add_product_entry([name,product_description,price,category,photo_url])
        // const newItem = await DB.add_test_item([info]) //this line for testing
        return res.status(200).send(newItem);

    },

    updateProductPrice: async (req,res,next) => {
        const DB = req.app.get('DB')
        const { price } = req.body
        const { product_id } = req.params
        const item = await DB.update_product_price([price,product_id])
        return res.status(200).send(item)
    },

    // getAll2: ( req, res, next ) => {
    //     const dbInstance = req.app.get('DB');
    //     // const { product_id } = req.params
    
    //     dbInstance.get_products()
    //       .then( product => res.status(200).send( product ) )
    //       .catch( err => {
    //         res.status(500).send({errorMessage: "uh oh"});
    //         console.log(err)
    //       } );
    //   },
}

// module.exports = {
//     create: ( req, res, next ) => {
//         const dbInstance = req.app.get('db');
//         const {name,description,price,image_url} = req.body
    
//         dbInstance.create_product([name,description,price,image_url])
//           .then( () => res.sendStatus(200) )
//           .catch( err => {
//             res.status(500).send({errorMessage: "uh oh"});
//             console.log(err)
//           } );
//       },
//     getOne: ( req, res, next ) => {
//         const dbInstance = req.app.get('db');
//         const {product_id} = req.params
    
//         dbInstance.read_product(product_id)
//           .then( product => res.status(200).send( product ) )
//           .catch( err => {
//             res.status(500).send({errorMessage: "uh oh"});
//             console.log(err)
//           } );
//       },
//     getAll: ( req, res, next ) => {
//         const dbInstance = req.app.get('db');
    
//         dbInstance.read_products()
//           .then( product => res.status(200).send( product ) )
//           .catch( err => {
//             res.status(500).send({errorMessage: "uh oh"});
//             console.log(err)
//           } );
//       },
//     update: (req,res,next) => {
//         const dbInstance = req.app.get('db')
//         const { product_id } = req.params
//         const { description } = req.body

//         dbInstance.update_product([product_id, description])
//         .then((product) => {res.status(200).send(product)})
//         .catch( err => {
//             res.status(500).send({errorMessage: "uh oh"})
//             console.log(err)
//         })
//     },
//     delete: (req,res,next) => {
//         const dbInstance = req.app.get('db')
//         const { product_id } = req.params

//         dbInstance.delete_product([product_id])
//         .then(res.status(200) )

//         dbInstance.delete_product()
//     }
// }