const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
const port = process.env.PORT || 5000;

//USER : mydbuser1
//password : Hv1WaumIV9AOS6C6

const uri = "mongodb+srv://mydbuser1:Hv1WaumIV9AOS6C6@cluster0.chwoh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
  try {
    await client.connect();
    const database = client.db("insertDB");
    const userCollection = database.collection("user");
    // create a document to insert
    // post API
    app.post('/users', async (req, res) => {

      console.log('hitting the post');
      res.send('hit the post');
    })

  } finally {
    await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Running my Curd server');

});


app.listen(port, () => {
  console.log('Running my curd server on port')
})

