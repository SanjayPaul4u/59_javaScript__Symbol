console.log("This is tutorial 59");
//SYMBOL IN JAVA SCRIPT

//INITIALIZE SYMBOL - set unique value
const sym1 = Symbol("My identyfier");
const sym2 = Symbol("My identyfier");

console.log("The symbol is: ",sym1);
console.log("The type of symbol is: ", typeof sym1);

console.log(sym1===sym2);


const k1 = Symbol("identifier for k1");
const k2 = Symbol("identifier for k2");

const obj= {};
obj[k1]= "Sanjay",
obj[k2]= "Rohan"
obj["name"]= "Ricky"

console.log(obj);
console.log(obj[k1]);
console.log(obj[k2]);
console.log(obj.k2);//ALART: WE CAN NOT DO THIS, BECAUSE IT IS SAME AS ****OBJ["K2"]**


//SYMBOLS ARE IGNORED IN FOR IN LOOP
for(key in obj){
    console.log("The the value: ", key, obj[key]);
}

//IN JSON TIME SYMBOLS ARE ALSO IGNORED
console.log(JSON.stringify(obj));