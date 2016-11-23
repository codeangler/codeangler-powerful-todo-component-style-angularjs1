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
    
    // Modifying View
    ctrl.addTodo = function() {
      // Check if there is new content to add, otherwise don't POST
      if(!ctrl.newTodo) {
        return;
      }

      // POST request via the TodoService
      TodoService
        .create({
          'title': ctrl.newTodo,
          'completed': false
        })
        .then((res) => {
          ctrl.list.unshift(res);
          ctrl.newTodo = '';
      });   
    };

    ctrl.removeTodo = function (item, index) {
      TodoService
        .remove(item)
        .then((response) => {
          ctrl.list.splice(index, 1);
       });
    };

    ctrl.updateTodo = function (item, index) {
      if (!item.title) {
        ctrl.removeTodo(item, index);
        return;
      } 

      TodoService
        .update(item);
    };

    ctrl.getRemaining = function () {
      return ctrl.list.filter(function (item) { 
        return !item.completed;
      });
    };

    // toggle state
    ctrl.toggleState = function (item) {
      TodoService
        .update(item)
        .then(
          () => {

          }, 
          () => {
            item.completed = !item.completed;
          });

    }

    // console.log()
    getTodos();
  }

  angular
    .module('app')
    .controller('TodoController', TodoController);
})();