let foodBtn = document.getElementById("getItems")
if(foodBtn) foodBtn.addEventListener('click', getItems)

function getItems() {
  fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => response.json())
  .then(data => {
    let food = data.filter(i => i.type === "vegetables")
    .map(i => i.name)

    console.log(food)
  })
}  