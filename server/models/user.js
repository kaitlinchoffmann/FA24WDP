const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS User (
    UserID INT NOT NULL AUTO_INCREMENT,
    Username VARCHAR(255) NOT NULL UNIQUE,
    Email VARCHAR(255) NOT NULL UNIQUE,
    Password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

  await con.query(sql)
}

createTable()

// USER Example:
const user = {
  Username: "cathy123",
  Password: "icecream"
}

//check to see if username is in use:
async function userExists(user) {
  let sql = `
    SELECT * FROM User
    WHERE Username = "${user.Username}"
  `
  return await con.query(sql)
}

// READ in CRUD - Logging in a user
async function login(user) {
  let cUser = await userExists(user)
  if(!cUser[0]) throw Error("Username does not exist!")
  if(cUser[0].Password != user.Password) throw Error("Password incorrect!!")

  return cUser[0]
}

// CREATE for User - registering
async function register(user) {
  let cUser = await userExists(user)
  if(cUser.length > 0) throw Error("Username already in use.")
  
  let sql = `
    INSERT INTO User (Username, Password, Email)
    VALUES("${user.Username}", "${user.Password}", "${user.Email}")
  `  
  await con.query(sql)
  let newUser = await login(user)
  return newUser //issue fixed from class: removed [0] since login function returns this already
}


// CRUD functions will go here 
//R for READ -- get all users
async function getAllUsers() {
  let sql = `SELECT * FROM User;`
  return await con.query(sql)
}

module.exports ={ getAllUsers, login, register }