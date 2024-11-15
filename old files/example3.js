// object literal
const animal1 = {
  type: "cat",
  name: "Fred",
  age: 2
}

console.log(animal1)

animal1.color = "orange"
animal1.name = "Kat"

console.log(animal1.type)

function Food(name, vegan, type) {
  this.foodName = name,
  this.foodVegan = vegan,
  this.type = type  
}

const food1 = new Food("carrot", true, "vegetable")
console.log(food1)

const food2 = new Food("watermelon", true)
food2.delicious = true
console.log(food2)

