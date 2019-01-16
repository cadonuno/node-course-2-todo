//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server: ", err);
  }
  console.log("Connected to MongoDB server");

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //delete all duplicates
  // db.collection('Users').deleteMany({name: "Ricardo Pereira"}).then((result) => {
  //     console.log(result);
  // });
  //find one and delete by id
  db.collection('Users').findOneAndDelete({_id: new ObjectID("5c3f41c38cfa1b8b23b9b7ce")}).then((result) => {
    console.log(result);
  });

  //db.close();
});
