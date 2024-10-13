const EventEmitter=require("events")

const eventEmitter=new EventEmitter()
eventEmitter.on("events",hello=(name)=>{
    console.log("hello "+name);
    
})

eventEmitter.emit("events","aslah")

eventEmitter.removeListener("events",hello)
eventEmitter.emit("events","aslah")