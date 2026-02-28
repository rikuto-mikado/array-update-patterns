const { products, targetId, updatedProduct } = require("./data");

function updatedProduct(items, id, newProduct) {
    return items.map(p => p.id === id ? newProduct : p);
}

const result = updatedProduct(products, targetId, updatedProduct);
console.log(result);