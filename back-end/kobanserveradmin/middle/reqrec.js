const rec = (req, res, next) => {
    console.log(`Les requetes réçus sont: ${req.url} en suite ${JSON.stringify(req.query)} puis ${JSON.stringify(req.params)} et la methode est ${req.method} dans le corps on a ${JSON.stringify(req.body)}`)
    next()
}

export default rec