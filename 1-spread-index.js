const { products, targetId, updatedProduct } = require("./data");

function updatedProduct(items, id, newProduct) {
    const index = items.findIndex(p => p.id === id);
    const updated = [...items];
    updated[index] = newProduct;
    return updated;
}

const result = updatedProduct(products, targetId, updatedProduct);
console.log(result);