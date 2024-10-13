const eventEmitter=require("events");
const EventEmitter=new eventEmitter();
EventEmitter.once("name",(greet)=>{
    console.log(`${greet} aslsh`);
    
})

EventEmitter.emit("name","Hello")
EventEmitter.emit("name","Hello")

