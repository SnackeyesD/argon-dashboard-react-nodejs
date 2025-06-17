import express from 'express'
import jwt from 'jsonwebtoken'
import Utilisateur from '../models/Utilisateur.js'
import dotenv from 'dotenv'
dotenv.config()

const routauth = express.Router()

routauth.post('/register', async(req, res) => {
    try {
        const {nom, prenom, tel, email, type_user, status, motdepasse} = req.body

        const existing = await Utilisateur.findByEmail(email) || await Utilisateur.findByTel(tel)

        if(existing) {
            return res.status(400).json({message: 'Cet utilisateur existe déjà, veuillez utiliser un autre mail ou téléphone'})
        }

        const newUtilisateur = await Utilisateur.create({nom, prenom, tel, email, type_user, status, motdepasse})

        //token
        const tokUtil = jwt.sign(
            {utilId: newUtilisateur.id, tel: newUtilisateur.tel, email: newUtilisateur.email,},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(201).json({
            message: 'Utilisateur créé avec succès',
            tokUtil,
            infouser: {id: newUtilisateur.id, nom, tel, prenom, email}
        })
    } catch(error) {
            res.status(500).json( {message: "La création a échoué " +error.message} )
}
})

routauth.post('/connexion', async (req, res) => {
    console.log('test sur la route de connexion')
    try {
        const { email, tel, passwd} = req.body

        console.log({ email, passwd})

        const adUtilisateur = await Utilisateur.findByEmail(email) || await Utilisateur.findByTel(tel)

        if(!adUtilisateur) {
            return res.status(401).json({message: 'utilisateur non trouvé'})
        }

        console.log('Utilisateur trouvé:', adUtilisateur)
        const verPwd= await Utilisateur.verifPassword(passwd, adUtilisateur.password_admin)
        console.log('Vérification terminée')

        if(!verPwd) {
            return res.status(401).json({message: 'Mot de passe incorrect'})
        }

        console.log('Le mot de passe est juste')
        const leToken = jwt.sign(
            {userId: adUtilisateur.id, tel: adUtilisateur.tel_admin, email: adUtilisateur.umail_admin},
            process.env.JWT_SECRET,
            {expiresIn: '24h'}
        )

        res.status(200).json(
            {
                message: "fini de souffrir, la connexion est réussie",
                success: true,
                token: leToken,
                user: {
                    id: adUtilisateur.id,
                    nom: adUtilisateur.nom_admin,
                    prenom: adUtilisateur.prenom_admin,
                    tel: adUtilisateur.tel_admin,
                    email: adUtilisateur.umail_admin
                }
            }
        )
        
    } catch(error) {
        return res.status(500).json({message: 'Erreur lors de la connexion: ' + error.message})
    }
})


export default routauth