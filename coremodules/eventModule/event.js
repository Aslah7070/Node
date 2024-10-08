let EventEmitter=require("events");
console.log(EventEmitter);


//on method.............
const eventEmitter=new EventEmitter();
// eventEmitter.on("great",(name)=>{
//     console.log(`hello ${name}`);

//     //chaining events...........
//     eventEmitter.emit("great2","shahuuu")
// })

// eventEmitter.on("great2",(name)=>{
//          console.log(`podiii ${name}`);
         
// })
// eventEmitter.emit("great","moosu")



//once............
const fn=(suuii)=>console.log(`suuiii ${suuii}`)

eventEmitter.on("name",fn);

eventEmitter.emit("name","cr7")
eventEmitter.removeListener("name",fn)
eventEmitter.emit("name","ronaldo")


eventEmitter.emit("name","shahuu")


