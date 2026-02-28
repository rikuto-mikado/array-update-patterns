
const { products, targetId, updatedProduct } = require("./data");

function updatedProduct(items, id, newProduct) {
    const updated = items.filter(p => p.id !== id);
    updated.push(newProduct);
    return updated;
}

const result = updatedProduct(products, targetId, updatedProduct);
console.log(result);