const http=require("http");
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    const path=req.url.toLowerCase()
    if(path==="/"){
        res.write("my name is aslah")
    }else if(path==="/about"){
        res.write("about page")
    }else{
        res.write("page not found")
    }
    res.end()
}).listen(3000,()=>{
    console.log("server on");
    
})