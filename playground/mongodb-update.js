//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server: ", err);
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID("5c3f51957187fd3707ade544")
  //   }, {
  //     $set: {
  //     completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then((result) => {
  //     console.log(result);
  //   });
  db.collection('Users').findOneAndUpdate({
      _id: new ObjectID("5c3f349699256d4cdfa3f8b7")
    }, {
      $set: {
        name: 'Ricardo'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });


  //db.close();
});
