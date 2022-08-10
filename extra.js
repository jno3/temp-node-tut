function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback) {
    var name = 'pexe'
    callback(name);
  }
  
  processUserInput(greeting);
  