const express = require('express');
const app = express();

app.listen(8080);
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('views', '../views')
app.set('view engine', 'ejs')

const cart = []

app.get('/', (_req, res) => {
    res.render('inicio', { cart })
})

app.post('/cart', (req, res) => {
    cart.push(req.body)
    res.redirect('/')
})