const { products, targetId, updatedProduct } = require("./data");

const updated = products.map(p => p.id === targetId ? updatedProduct : p);

console.log("Before update:", products);
console.log("After update:", updated);