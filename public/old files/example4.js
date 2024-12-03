// function Product(id, name, price) {
//   this.productId = id
//   this.productName = name
//   this.productPrice = price
// }
// Product.prototype.getProductName = function() {
//   return this.productName
// }
// Product.prototype.setProductName = function(name) {
//   this.productName = name
// }
class Product {
  constructor(id, name, price) {
    this.productId = id
    this.productName = name
    this.productPrice = price
  }

  getProductName() {
    return this.productName
  }

  setProductName(name) {
    this.productName = name
  }
}

const p1 = new Product(234, "table")
console.log(p1)

p1.weight = 100

p1.setProductName("table top")
console.log(p1)
