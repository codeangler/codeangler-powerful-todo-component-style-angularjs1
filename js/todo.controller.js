(function(){
  'use-strict';
  function TodoController() {
    
    this.newTodo = '';

    this.list =[{
      'title': 'First todo Item!',
      'completed': false,
    },
    {
      'title': 'Second todo Item!',
      'completed': true,
    },
    {
      'title': 'Third todo Item!',
      'completed': false,
    },
    {
      'title': 'Fourth todo Item!',
      'completed': false,
    }];

    this.addTodo = function() {
      this.list.unshift({
        'title': this.newTodo,
        'completed': false
      });
      this.newTodo = '';
    };

    this.removeTodo = function (item, index) {
      this.list.splice(index, 1);
    };

    this.getRemaining = function () {
      return this.list.filter(function (item) { 
        return !item.completed;
      });
    };
    // console.log(this.list)
  }

  angular
    .module('app')
    .controller('TodoController', TodoController);
})();