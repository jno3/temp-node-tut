function greeting(name) {
    console.log('Hello ' + name);
  }
  
  function processUserInput(callback, callback2) {
    var name = 'pexe'
    callback2({
      name: 'vivivi',
      surname: 'ahjaha',
      gugug: 'pexe'
    })
    callback(name);
  }
  
  processUserInput(greeting, (callback2) =>{
    console.log(callback2.name)
  });
  

