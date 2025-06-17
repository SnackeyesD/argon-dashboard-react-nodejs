import express from 'express'
import data from '../public/souce.js'


const route = express.Router()
const donnee = data[0].produits


route.get('/', (req, res, suite) => {
    console.log('Je suis sur la route des utilisateurs')

    res.send(donnee)
})

export default route
