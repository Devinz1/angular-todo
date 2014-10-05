var app = angular.module('todoList');

app.service('todoService', function(){
  var items = [];
  // var items = [{title:'first thing', done:false}];

  //attaches a getItems function to our service
  // with returns whatever is in our items array above
  this.getItems = function () {
    return items;
  };


  //attaches an addItem function to the service. this function 
  //takes an item parameter and it shoves into the object
  //{title: item, done: false} and then pushes that object on to
  // the items array. you can see this with the console.log stuff
  this.addItem = function(item){
    items.push({title: item, done: false});
    console.log(items);
  };

  //attaches a removeItem function to the service. this function 
  //takes an item parameter and loops through the items array.
  //if the item === to the title property of any object in the items
  //array then it splices that object out of the items array
  //you can see this with the console.log stuff
  this.removeItem = function(item){
    console.log(items.length);
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      console.log(item);
      if (items[i].title === item){
        items.splice(i, 1);
      }
    }
  };
});