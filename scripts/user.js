// let username = document.getElementById("username").value
// let password = document.getElementById("pswd").value
// let fullName = document.getElementById("fullName").value

let regForm = document.getElementById("regForm")
if(regForm) regForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault()

  const user = {
    fullName: document.getElementById("fullName").value,
    username: document.getElementById("username").value,
    password: document.getElementById("pswd").value
  }
// this would be the fetch call to server...more later :)

  let greeting = document.getElementById("greeting")
  greeting.innerText = `Welcome ${user.username}!!!!`

  console.log(user)
}
