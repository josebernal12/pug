const Producto = []
hasAny = true




const getProducto = (req, res) => {
    res.render('mostrar.pug', { Producto, hasAny: hasAny })
}

const postProducto = (req, res) => {
    Producto.push(req.body)
    res.redirect('/producto')
}


module.exports = {
    getProducto,
    postProducto
    
}