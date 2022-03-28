const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.l8gir.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => { //async showing this is asynchronous function
  const collection = client.db("test").collection("devices");
    if(err){
      console.log(err.message)
      return
    }
    console.log('Connected to MongoDB')

    console.time('insert'); //Record Time for program to excute

    //Part 1 insertOne + .then

    // client.db('Week03').collection('companies').insertOne({
    //     name:'Zenfolio',
    //     address:{
    //         street:'123 Main St',
    //         city:'New York',
    //         state:'NY',
    //     },

    //     employees: [{
    //         name:'John',
    //         age:25,
    //         position:'CEO'
    //     },
    //     ]
        
    // }).then (result=>{
    //     console.timeEnd('insert');//Show Time for program to excute
    //     console.log(result);   
    // })

    //Part 2 await
    // let result = await client.db('Week03').collection('companies').insertOne({
    //     name:'Zenfolio',
    //     address:{
    //         street:'123 Main St',
    //         city:'New York',
    //         state:'NY',
    //         zip:'10001'
    //     },
    // })

     //Part 3 insertMany
    //  let result = await client.db('Week03').collection('companies').insertMany([
    //      {
    //     name:'Zenfolio',
    //     address:{
    //         street:'123 Main St',
    //         city:'New York',
    //         state:'NY',
    //         zip:'10001'
    //             }
    //      },
    //     {
    //         name:'Harry',
    //         address:{
    //             street:'123 Main St',
    //             city:'New York',
    //             state:'NY',
    //             zip:'10001'
    //                 }
    //     },
    //  ])

//Dont put await and .then = not logic

    //Part 4 updateOne / $set
    // let result=await client.db('Week03').collection('companies').updateOne(
    //     {name:'Zenfolio'},
    //     {$set:{name:'Zenfolio Inc.'}}
    //     )

    //Part 5 updateMany
    // let result=await client.db('Week03').collection('companies').updateMany(
    //     {name:'Zenfolio'},
    //     {$set:{name:'Zenfolio Inc.'}}
    //     )

    //Part 6 upsert 
    // let result=await client.db('Week03').collection('companies').updateOne(
    //     {name:'utem'}, //name doesnt exist in db
    //     {$set:{name:'Utem123.'}},
    //     {upsert:true} //create new document if no doc matches the query
    //     )

    //Part 7 deleteOne
    // let result=await client.db('Week03').collection('companies').deleteOne(
    //     {name:'Zenfolio Inc.'}, 
        
    //     )

    //Part 7 deleteMany
    let result=await client.db('Week03').collection('companies').deleteMany(
        {name:'Zenfolio Inc.'}, 
        
        )


    console.timeEnd('insert');
    console.log(result); 
    console.log('completed')
})

