import express from 'express'

import images from '../middle/images.js'

const imagesUp = express.Router()

imagesUp.post('/upload', images.single('imagefile'), async (req, res) => {

    try {
            console.log('Image dans la boite pour la boutique', req.file)
            if (!req.file) {
                return res.status(400).json({ error: 'Le fichier pas dans la requete'})
                }

            res.status(200).json({
                message: 'Image uploadée avec succès',
                filePath: `/sauvegarde/${req.file.filename}`
            })
    } catch (error) {
        res.status(400).json({message: "L'opération a échoué parce que ", error: error.message}) 
    }
})

export default imagesUp