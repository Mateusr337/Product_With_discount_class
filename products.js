class Product {
  constructor({ id, name, price, discount }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.discount = discount;
  }

  applyDiscount() {
    return this.price * (1 - this.discount);
  }
}

const products = [
  new Product({
    id: 1,
    name: "Televisão",
    price: 3500,
    discount: 0.05
  }),
  new Product({
    id: 2,
    name: "Smartphone",
    price: 1800,
    discount: 0.1
  }),
  new Product({
    id: 3,
    name: "Notebook",
    price: 6000,
    discount: 0.2
  })
];

function getProducts() {
  return products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    discountedPrice: product.applyDiscount()
  }));
}
