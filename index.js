// index.js
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("Hello, world!");
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am anonymous");
    };
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };
  
  