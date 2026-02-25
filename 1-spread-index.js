const { products, tagetId, updatedProduct } = require("./data");

const index = products.findIndex(p => p.id === targetId);
const updated = [...products];
updated[index] = updatedProduct;

console.log("Before update:", products);
console.log("After update:", updated);