import { pool } from "../database/conndb.js";
import bcrypt from 'bcrypt'

export default class Utilisateur {
    static async create(userData) {
        const { nom, prenom, tel, email, type_user, status, motdepasse} = userData;

        try {
            const hashedPassword = await bcrypt.hash(motdepasse, 10);

            const [result] = await pool.execute(
                'INSERT INTO users (nom, premon, telephone, cumail, type_user, status,  mtpuser) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [nom, prenom, tel, email, type_user, status, hashedPassword]
            )


            return { id: result.insertId, ...userData }

            }  catch (error) {
                    throw new Error('Erreur lors de la création de l\'utilisateur vendeur ou acheteur: ' + error.message);
                            } 

    }

    static async findByEmail(email) {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM users WHERE cumail = ?', [email]
            )

            if (rows.length === 0) {
                console.log('le mail n\'a pas été trouvé')
                return null; // Aucun utilisateur trouvé avec cet email
            }
            return rows[0] || null;

        } catch(error) {
            throw new Error('Erreur lors de la recherche de l\'utilisateur avec un pb de son email : ' + error.message);
        }
    }

    static async findByTel(tel) {
        try {
            const [rows] = await pool.execute(
                'SELECT * FROM users WHERE telephone = ?', [tel]
            )

            if (rows.length === 0) {
                console.log('le téléphone n\'a pas été trouvé')
                return null; // Aucun utilisateur trouvé avec ce téléphone
            }
            return rows[0] || null;

        } catch(error) {
            throw new Error('Erreur lors de la recherche de l\'utilisateur avec un pb de son téléphone : ' + error.message);
        }
    }

    static async verifPassword(getpassword, hashedPassword) {
        return await bcrypt.compare(getpassword, hashedPassword)
    }
}

