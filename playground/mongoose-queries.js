const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

var id = "5c40e4747187fd3707ae1e71";

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find User');
  }
  console.log('User: ', JSON.stringify(user._doc, undefined, 2));
}).catch((err) => console.log(err));

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log("Todo by Id: ", todo._doc);
// }).catch((err) => console.log(err));

// var id = "5c57e11176f716278eb03e3c11";
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Todos: ", todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("Todo: ", todo._doc);
// });
