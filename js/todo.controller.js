(function(){
  'use-strict';
  function TodoController() {
    this.list =[{
      'title': 'First todo Item!',
      completed: true,
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
    // console.log(this.list)
  }

  angular
    .module('app')
    .controller('TodoController', TodoController);
})();