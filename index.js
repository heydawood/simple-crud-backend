const mongoose = require('mongoose');
const express = require('express');
const app = express()
const productRoute = require('./routes/product.route');

//middlewear
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// apis are coming from routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
    res.send('Hello from node API')
});


mongoose.connect('mongodb+srv://dawoodfaisal19:admin@backenddb.de29y.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
        console.log('Connected to Database!');
    })
    .catch(() => {
        console.log('Connection failed!');
    })