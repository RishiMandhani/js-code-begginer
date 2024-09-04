console.log(2>=3);
console.log("2">1);
console.log(null>0);
console.log(null>=0);
console.log(null==0);
//=== strict check
//itchecks datatype also
console.log("2"===2);
//this give false as these both are not same data type
//data types
//primitive
//Number,String,null,undefined,Bollean,Symbol,BigInt,7 types
//non primitive(refference)
//Array,Objects,Functions
//Symbol
const Id=Symbol('123')
const another=Symbol('123')
console.log(Id==another);//it give value as false


