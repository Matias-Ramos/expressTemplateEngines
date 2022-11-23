const express = require('express')
const app = express()
const handlebars = require("express-handlebars");
const products = []

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.engine('hbs',
    handlebars({
       extname:'.hbs',
       defaultLayout:'index.hbs',
       layoutsDir:__dirname+'/views/layouts',
       partialsDir:__dirname+'/views/partials'
    }))
app.set('view engine', 'hbs')
app.set('views', './views')


const PORT = 8070


app.get('/', (_req, res) => {
    res.render('inicio', { products:products })
})

app.post('/products', (req, res) => {
    products.push(req.body)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log('server OK!!');
})