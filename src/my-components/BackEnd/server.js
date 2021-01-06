const express = require('express')
const app = express()
const port = 4000
const cors = require('cors') // for http server 
const bodyParser = require("body-parser"); // read http post data
const path = require('path'); //
const mongoose = require('mongoose');  // import for mongoose

app.use(cors());  // use cors everytime

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.urlencoded({ extended: false })) // parsed with query string libary
app.use(bodyParser.json())  // // parse application/json

const myConnectionString = 'mongodb+srv://admin:mongoDb@cluster0.ogrqd.mongodb.net/cars?retryWrites=true&w=majority'  // connect to cars database
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema

var carSchema = new Schema({
    model: String,
    year: String,
    poster: String
})

var CarModel = mongoose.model("car", carSchema)

app.get('/api/cars', (req, res) => {  // new route
    // const mycars =[
    //     {
    //         "Model": "BMW 520d",
    //         "Year": "2020",
    //         "Poster": "https://media.whatcar.com/662x440/wc-image/2020-10/p90389016_highres_the-new-bmw-530e-xdr.jpg"
    //         },
    //         {
    //         "Model": "AUDI A6",
    //         "Year": "2019",
    //         "Poster": " https://media.ed.edmunds-media.com/audi/a6/2019/oem/2019_audi_a6_sedan_30-tfsi-prestige-quattro_fq_oem_4_815.jpg "
    //         },
    //         {
    //         "Model": "GOLF GTD",
    //         "Year": "2015",
    //         "Poster": " https://www.topgear.com/sites/default/files/styles/fit_1960x1102/public/cars-road-test/carousel/2015/04/Large%20Image_3.jpeg?itok=Dc4nbZKg "
    //         }
    // ];
    CarModel.find((err, data) => {
        res.json(data)
    })
    app.get('/api/cars/:id', (req, res) => {  // function to get http requests
        console.log(req.params.id);

        CarModel.findById(req.params.id, (err, data) => {
            res.json(data);
        })
    })
})

app.put('/api/cars/:id', (req, res) => {
    console.log("Update car: " + req.params.id)
    console.log(req.body)

    CarModel.findByIdAndUpdate(req.params.id, req.body, { new: true },  // updates ad
        (err, data) => {
            res.send(data)
        })

})

app.delete('/api/cars/:id', (req, res) => {  // deletes ad
    console.log("Delete Ad: " + req.params.id)
    CarModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})


app.post('/api/cars', (req, res) => { // end point for post
    console.log('Car Ad Made')
    console.log(req.body.model) // shows the deails
    console.log(req.body.year)
    console.log(req.body.poster)

    CarModel.create({  // creates care model, year , and poster
        model: req.body.model,
        year: req.body.year,
        poster: req.body.poster
    })

    res.send('Car Listed');// stops duplicates
})
app.listen(port, () => {
    console.log(`Car app listening at http://localhost:${port}`)  // listens on port
})