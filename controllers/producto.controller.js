

const productos = [
    { id: 1, nombre: 'Celular X2', pais: 'España' },
    { id: 2, nombre: 'Nintendo SW', pais: 'España' },
    { id: 3, nombre: 'PS5', pais: 'Argentina' },
    { id: 4, nombre: 'XBOX S', pais: 'Argentina' },
    { id: 5, nombre: 'RTX 5090', pais: 'Inglaterra' },
    { id: 6, nombre: 'Liverpool XGAME', pais: 'Inglaterra' },
];

module.exports = {
    getAll: (req, res) => {
        console.log('ggetall');
        res.json(productos);
    },
    getById: (req, res) => {
        const id = req.params.id;  
        let producto = productos.find( producto => producto.id == id);
        res.json(producto)
    },
    create: (req, res) => {
        
    },
    update: (req, res) => {

    },
    remove: (req, res) => {
        
    }
}