const { products, targetId, updatedProduct } = require("./data");

function updatedProduct(items, id, newProduct) {
    const index = items.findIndex(p => p.id === id);
    items[index] = newProduct;
    return items;
}

const result = updatedProduct(products, targetId, updatedProduct);
console.log(result);