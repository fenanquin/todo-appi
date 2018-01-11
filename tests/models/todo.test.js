const chai = require('chai');
const assert = chai.assert;
const Todo = require('../../models/todo');

chai.use(require('chai-as-promised'));

suite('Todo', () => {
  test('should reject undefined on text field', () => {
    var todo = new Todo({text: undefined});
    return assert.isRejected(todo.validate());
  });
});
