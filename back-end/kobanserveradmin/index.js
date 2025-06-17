import express from 'express'
import route from './routeskbn/infoprod.js'
import ejs from 'ejs'
import path from 'path'
import cors from 'cors'
//import bcrypt from 'bcrypt'
import rec from './middle/reqrec.js'

import { checkConnection } from './database/conndb.js'
import routauth from './routeskbn/au.js'
import dotenv from 'dotenv'
dotenv.config()

const host = 'localhost'

/*
const pathroutes = {
    product: {
        1: '/recproduits',
        2: '/voitures'
    }
}

*/

const port = process.env.PORT
const app = express()
const corConfig = {
    origin: 'localhost:3000',
    method: 'GET, POST, PUT, DELETE, HEAD. PATCH',
    credentials: true,
    optionsSuccessStatus: 204
}

checkConnection()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.set('view engine', ejs)
app.set('views', path.resolve('./vues'))

app.use(cors())
app.use(rec)
app.use('/api/auth', routauth)
app.use('/dusers', route)



app.listen(port,host, () => console.log(`Salut trouve moi sur http://${host}:${port}`))