//primitive
// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt
const score=100
const scorevalue=100.4

const isLoggedIn=false
const ousideTemp=null
let userEmail;

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id)
console.log(anotherid==id)

const bigNumber= 39639537495639n

//Reference (NOn primitive)

//Array, Objects, functions

const heros = ["shakiman", "naagraj", "doga"];
let myObj = {
    name:"aditya",
    age: 34,
    gender: 'M'
}

const myFunction = function(){
    console.log("hello world")
}
console.log(typeof myFunction)