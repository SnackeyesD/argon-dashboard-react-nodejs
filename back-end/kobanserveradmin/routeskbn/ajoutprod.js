import express from 'express'

const aProd = express.Router()

 aProd.post('/product', (req, res) => {
    const items = req.body
    console.log(items)

    if (empty(imtes)) res.status(400).send('Data not found')
    
    const check = empty(items) ? res.status(400).send(' empty datas'): res.status(200).send('Data received')
    console.log(check)

    return check
})
