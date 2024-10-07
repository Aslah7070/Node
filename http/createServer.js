const http=require("http");
let port=4000;
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("hello world");
    res.end("")
})
server.listen(port,()=>{
    console.log("server is started");
    
})