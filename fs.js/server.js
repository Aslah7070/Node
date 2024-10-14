const http=require("http");
const fs=require("fs")
http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("home pageds")
        fs.readFile("hello.txt","utf-8",(err,data)=>{
            if(err) {
                console.log(err);
                res.end()
            }
            else  {
                console.log(data);
                
                res.write(data)
                res.end()
            }
        })
    }else if(req.url==="/hello"){
        res.write("hello page")
        res.end()

    }else{
        res.write("page not found")
        res.end()
    }
    // res.end()
}).listen(3007,()=>{
    console.log("started");
    
})