// HOISTER 
// Calling the function before writing the function
people()
function people(){
    console.log("Wanji")
}

//CLOSURE
function school(){var a = 20
    function student(){
        console.log(a + 50)
    }
    student()
}
school()

let nums = [2,4,7]
console.log({nums})

let nums2 = new Array (2,4,7)
console.log({nums2})
 

// push, pop, slice,splice, shift and unshift
//map - takes in an arguement and operates on every element in an array 
let a = [2,4,7]
var add = a.unshift(34)
var add2 = a.push(24)
var add3 = a.splice(34)
var add4 = a.slice(20)
console.log({a}[4])
let b = a.map(item => item*2)
console.log(b)


let oddNumbers = a.filter(item => item % 2 !== 0)
console.log({oddNumbers})


