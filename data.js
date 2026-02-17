const products = [
  {
    id: "1",
    title: "Node.js Crash Course",
    description:
      "A hands-on guide covering Express, REST APIs, and database integration from the ground up.",
    price: 29.99,
  },
  {
    id: "2",
    title: "iPhone 15",
    description:
      "Powered by the A16 chip with improved camera performance and longer battery life.",
    price: 999,
  },
  {
    id: "3",
    title: "Wireless Mouse",
    description:
      "Silent-click ergonomic design with Bluetooth 5.0. Supports switching between up to 3 devices.",
    price: 34.99,
  },
];

// The ID what we want to update in our test case
const targetId = "2";

const updatedProduct = {
  id: "2",
  title: "iPhone 16",
  description:
    "Featuring the A17 Pro chip, USB-C, titanium design, and spatial video recording.",
  price: 1199,
};

module.exports = { products, targetId, updatedProduct };
