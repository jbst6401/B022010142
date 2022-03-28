const bcrypt = require("bcryptjs")

const password = "mypass123"
const saltRounds = 10

const MongoClient = require("mongodb")


const UserSchema = new MongoClient.Schema({
  username: String,
  password: String
})

module.exports = mongodb.model("User", UserSchema)

bcrypt.genSalt(saltRounds, function (saltError, salt) {
  if (saltError) {
    throw saltError
  } else {
    bcrypt.hash(password, salt, function(hashError, hash) {
      if (hashError) {
        throw hashError
      } else {
        console.log(hash)
        //$2a$10$FEBywZh8u9M0Cec/0mWep.1kXrwKeiWDba6tdKvDfEBjyePJnDT7K
      }
    })
  }
})