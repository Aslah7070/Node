const path=require("path");
const a=path.basename("one/twom/three/file.js")
console.log("basename  :",a);


const b=path.dirname("one/two/three/file.text")
console.log("dirname  :",b);
 


const c=path.parse("one/two/three/file.text")
console.log(c);


const d=path.format({
    root:"/",
    base:"hello.js",
    dir:"one/two/three",
    ext:"js",
    name:"hello"
})
console.log(d);
