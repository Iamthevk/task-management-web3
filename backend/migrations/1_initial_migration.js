const TodoListsContract = artifacts.require("TodoListsContract");

module.exports = function (deployer) {
  deployer.deploy(TodoListsContract);
};
