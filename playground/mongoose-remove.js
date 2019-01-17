const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

const {User} = require('./../server/models/user');

Todo.findOneAndRemove('5c40f3817187fd3707ae239d').then((todo) => {
  console.log(todo);
});



Todo.findByIdAndRemove({_id: '5c40f3817187fd3707ae239d'}).then((todo) => {
  console.log(todo);
});
