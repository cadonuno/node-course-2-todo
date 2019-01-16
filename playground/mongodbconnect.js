//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server: ", err);
  }
  console.log("Connected to MongoDB server");

  // db.collection('Todos').insertOne({
  //     text: 'Something to do',
  //     completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert ToDo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new doc into Users collection, Name, Age and location
  // db.collection('Users').insertOne({
  //   name: 'Ricardo Pereira',
  //   age: 25,
  //   location: 'Warszawa, PL'
  // }, (err, result) => {
  //   if (err) {
  //       return console.log('Unable to insert User', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });

  db.close();
});
