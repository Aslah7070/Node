// Original object with nested objects
let obj1 = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345
    }
};


let shallowCopy = { ...obj1 };
let deep=JSON.parse(JSON.stringify(obj1))

// Modify the nested object in the original
obj1.address.city = "New Wonderland";


console.log(obj1);
// Output: { name: 'Alice', age: 30, address: { city: 'New Wonderland', zip: 12345 } }
console.log("deep",deep);

console.log("shaalooo",shallowCopy);






