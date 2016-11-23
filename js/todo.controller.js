(function(){
  'use-strict';
  function TodoController(TodoService) {
    const ctrl = this;
    ctrl.newTodo = '';
    ctrl.list =[];
    
    function getTodos() {
      TodoService
        .retrieve()
        .then((response) => { 
          ctrl.list = response;
        });
    }
    

    ctrl.addTodo = function() {
      ctrl.list.unshift({
        'title': ctrl.newTodo,
        'completed': false
      });
      ctrl.newTodo = '';
    };

    ctrl.removeTodo = function (item, index) {
      ctrl.list.splice(index, 1);
    };

    ctrl.getRemaining = function () {
      return ctrl.list.filter(function (item) { 
        return !item.completed;
      });
    };
    // console.log(ctrl.list)
    getTodos();
  }

  angular
    .module('app')
    .controller('TodoController', TodoController);
})();