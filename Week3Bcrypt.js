const { faker } = require('@faker-js/faker');
const bcrypt = require("bcryptjs")

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.l8gir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if (err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB')

    //Array to store all the names
    const username = faker.name.findName();
    const userpassword = faker.internet.password();

    const saltRounds = 10

    bcrypt.genSalt(saltRounds, function (saltError, salt){
        if(saltError){
            throw saltError
        }else{
            bcrypt.hash(userpassword, salt, function(hashError, hash){
                if (hashError){
                    throw hashError
                }else {
                    //console.log(hash)
                    const hash_password = hash
                    
                    //console.log(new_password)
                    
                    client.db("utem").collection("sample_user").insertOne({
                      user_name:username,
                      user_password:hash_password,
                    })
                    .then(result => {
                        console.log(result);
                        console.log({
                          "username":username},'\n',
                          {"password":hash_password},'\n',
                          )
                    
                    });
                }
            })
        }

    })
});