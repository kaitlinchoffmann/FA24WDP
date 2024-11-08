// // alert("HELLO WORLD!!!!!!")
// console.log(1+2)
// console.log("hello!")

// BMI Calculation
let weight = 130 // this normally would come from a form
let height = 64
let bmi = (weight * 703) / (height**2)
let healthState

if(bmi < 18.5) {
  healthState = "underweight"
} else if(bmi <= 25) {
  healthState = "normal"
} else if(bmi <= 30) {
  healthState = "overweight"
} else {
  healthState = "obese"
}

console.log(`BMI = ${bmi.toFixed(1)}. Health state = ${healthState}.`)