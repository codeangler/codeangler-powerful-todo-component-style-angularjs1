(function() {
  'use strict';

  function TodoService($http) {
    const API = "http://jsonplaceholder.typicode.com/todos/"

    function create() {

    }
    
    function retrieve() {
      return $http
        .get(API)
        .then((response) => {
          return response.data.splice(0, 10);
        });
    }

    function update() {

    }

    function remove() {

    }

    return { create, retrieve, update, remove };
  }

  angular
    .module('app')
    .service('TodoService', TodoService);

})();
