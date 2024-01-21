let p1 = new Promise((resolve, reject) =>
  {
  alert("Hey I am not resolved") // alert will be executed first
  
    setTimeout(() =>
      {
        resolve("1 "); //resolve means promise is fulfilled and it will be executed after 2 seconds
      }, 2000);
  })
p1.then(() =>{
  console.log("Hurray")
  return new Promise((resolve, reject) => // new promise is created
    {
      setTimeout(() =>
        {
          resolve(4); 
        }, 6000);
    })
}).then((value) => //.then is used to execute the next promise
  {
    console.log(value);
  })
p1.then(() =>
  {
    console.log("Congratulations this promise is now resolved");
  })