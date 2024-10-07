const http=require("http");
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>home page</h1>")
    }else if(req.url==="/about"){
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write("<h1>about page</h1>")
    }else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1>404 page not found</h1>")
    }
    res.end()
}).listen(3002,()=>{
    console.log("server started");
    
})