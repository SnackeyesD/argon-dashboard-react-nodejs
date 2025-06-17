import express from 'express'
import Product from '../models/Produits.js'

const aProd = express.Router()

 aProd.post('/createprod', async (req, res) => {
    try{
        const productData = req.body;
        const newProduct = await Product.create(productData);
        res.status(201).json(newProduct);
    }

    catch(error) {
        res.status(500).json({message: "Erreur lors de la création du produit: " + error.message})
    }
})

export default aProd