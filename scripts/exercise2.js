// 2, 4, 3, 9, 10, 44, 21, 21, 21, 2, 21

let numbers = [2, 4, 3, 9, 10, 44, 21, 21, 21, 2, 21]
//             0  1  2  3   4  5    6  7   8   9  10

console.log(numbers)

let count = 0
for(let i = 0; i<numbers.length; i++) {
  if(numbers[i] % 3 == 0) {
    count++
    numbers.splice(i, 1)
    i--
  }
}

console.log(`Count = ${count}!!!!`)
console.log(numbers)