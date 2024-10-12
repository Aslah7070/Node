const axios=require("axios")
const http = require("http");
const fs=require("fs")
const path=require("path")
const paths= path.join(__dirname,"index.txt")
const data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];

const server = http.createServer((req, res) => {
    // Set response headers for JSON
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/data") {
        // Respond with JSON data
        res.writeHead(200);
        res.end(JSON.stringify(data));
    } else {
        // Handle 404
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

// Listen on port 3000
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000/");
});

 async function dis(){
    try {
        const responce=await axios.get("http://localhost:3000/data")
        fs.writeFile(paths,JSON.stringify(responce.data),"utf-8",(err)=>{
            if(err){
                console.log("dsfsd",err);
                
            }else{
                console.log("compleree");
                
            }
        })
    return responce.data
    } catch (error) {
        console.log(error);
        
    }
}
  ( async()=>{
  const a=  await dis()
  console.log(a);
  
  })()
    




