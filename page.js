/* eslint-disable */

const productsElement = document.querySelector(".products");

function renderProducts() {
  const products = getProducts();
  console.log(products);
  let html = "";

  for (const product of products) {
    html += `
      <div class="product">
        <div class="name">${product.name}</div>
        <div class="price">R$ ${product.price
          .toFixed(2)
          .replace(".", ",")}</div>
        <div class="discountedPrice">R$ ${product.discountedPrice
          .toFixed(2)
          .replace(".", ",")}</div>
      </div>
    `;
  }

  productsElement.innerHTML = html;
}

renderProducts();
