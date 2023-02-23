//Desafio 1
class ProductMannager {
    static id = 1

    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock) {

        const product = ({
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
            id: ProductMannager.id
        })

        const chekCode = this.products.find(e => e.code === product.code)

        if (chekCode != undefined) {
            return console.log('error, uno de los productos tiene el code repetido')
        } else if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return console.log('uno de los productos tiene campos incompletos')
        } else {
            this.products.push(product)
            ProductMannager.id++
        }
    }

    getProducts() {
        return console.log(this.products)
    }

    getProductsById(id) {
        const busqueda = this.products.find(e => e.id === id)

        if(busqueda != undefined) {
            console.log('Producto encontrado', busqueda)
        } else {
            console.log('Product not found')
        }
    }
}

const newProduct = new ProductMannager()

newProduct.addProduct('batoque acro', 'impreso en 3D', 80, 'imgRoute', 1243, 15)
newProduct.addProduct("Pica2", "Parapente homologado EN-A", 20000, "imgRoute", 1245, 1)
newProduct.getProducts()

newProduct.getProductsById(1)

module.exports = ProductMannager