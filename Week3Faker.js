//Faker, r=random
const { faker } = require('@faker-js/faker');
const rName = faker.name.findName(); 
const rstreet = faker.address.streetAddress(); 
const rcity = faker.address.cityName(); 
const rstate = faker.address.state();
const rzipcode = faker.address.zipCodeByState();

//Mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.l8gir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => { //async showing this is asynchronous function
  const collection = client.db("test").collection("devices");
    if(err){
      console.log(err.message)
      return
    }


 let result = await client.db('Week03').collection('companies').insertOne({
        name:rName,
        address:{
            street:rstreet,
            city:rcity,
            state:rstate,
            zip:rzipcode
        },
    })
    console.log({
        "name":rName},'\n',
        {"street":rstreet},'\n',
        {"city":rcity},'\n',
        {"state":rstate},'\n',
        {"zip":rzipcode},'\n',
        )
    console.log(result);
})