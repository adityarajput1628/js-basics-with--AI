let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toUTCString())
console.log(myDate.toLocaleString())

console.log(typeof myDate)//object

let mycreatedDate = new Date('2023-06-01')
let mycreatedDate1= new Date(2023,0,1)//month start from 0
let mycreatedDate2= new Date(2023,0,1,5,30,0)//month start from 0

console.log(mycreatedDate.toDateString())
console.log(mycreatedDate1.toDateString())
console.log(mycreatedDate2.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))//seconds

let newdate = new Date()
console.log(newdate.getMonth()+1)//0-11
console.log(newdate.getDate())//1-31
console.log(newdate.getDay())//0-6


console.log(newdate.toLocaleString('default',
     {month:'short', weekday:'long',year:'numeric',day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit'},
    ))