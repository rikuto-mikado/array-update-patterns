const { products, targetId, updatedProduct } = require("./data");

function updatedProudct(items, id, newProduct) {
    const index = items.findIndex(p => p.id === id);
    items.splice(index, 1, newProduct);
    return items;
}

const result = updatedProudct(products, targetId, updatedProduct);
console.log(result);