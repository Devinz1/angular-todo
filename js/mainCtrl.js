var app = angular.module('todoList');

app.controller('mainCtrl', function($scope, todoService){
    
  //we call our getItems() method which we declared
  //and attached in our todoService. if you look at the 
  //getItems() method in the todoService file, you will notice
  //that it returns an items, which is an array. don't beleive me
  //uncomment the console.log($scope.todos) and you will see
  //this array gets assigned to the todos property on the scope 
  //which is what allows to be expressed in the view
  $scope.todos = todoService.getItems();
  // console.log($scope.todos);

  //here we declare a function called addToList and bind it to 
  //the scope. when this function is called, it passes in
  //$scope.newTodo, which value gets pulled from the input field
  //because we setup that ng-model="newTodo" stuff. this is analogous
  //to .val() in jquery.  so it grabs that value from the input
  //field and passes it into the addItem function on our todoService
  //as the item parameter that it requires.
  $scope.addToList = function() {
    todoService.addItem($scope.newTodo);
    $scope.newTodo = '';
  };

  //same idea as above
  $scope.pullFromList = function() {
    todoService.removeItem($scope.removeTodo);
    $scope.removeTodo = '';
  };

});