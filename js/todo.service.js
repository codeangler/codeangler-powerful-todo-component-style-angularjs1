(function() {
  'use strict';

  function TodoService($http) {
    const API = "http://jsonplaceholder.typicode.com/todos/"

    function create(todo) {
      return $http
        .post(API, todo)
        .then((res) => {
          return res.data;
        })
    }
    
    function retrieve() {
      return $http
        .get(API)
        .then((response) => {
          return response.data.splice(0, 10);
        });
    }

    function update(todo) {
      return $http
        .put(API + todo.id)
        .then((response) => {
        
        return response.data;
      });
    }

    function remove(todo) {
      return $http
        .delete(API + todo.id)
        .then((res) => {
          return res.data;
        });
    }

    return { create, retrieve, update, remove };
  }

  angular
    .module('app')
    .service('TodoService', TodoService);

})();
