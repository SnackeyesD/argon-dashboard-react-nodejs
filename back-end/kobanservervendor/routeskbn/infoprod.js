import express from 'express'
import data from '../public/souce.js'
import Produits from '../models/Produits.js'

const routeProd = express.Router()

console.log('Je suis dans le fichier infoprod.js')


routeProd.get('/categories',  async (req, res, suite) => {
    console.log('Je suis sur la route des produits')

    const toutesLesCategories = await Produits?.getCategories()
    res.send(toutesLesCategories)
})

export default routeProd
