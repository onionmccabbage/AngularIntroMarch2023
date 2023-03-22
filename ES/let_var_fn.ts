// we should use let and const and avoid var

function fn(){
    let a = 1 // this is not hoisted - as if var a; a=1
    return a
}

const a = [1, 2, ,,3, []]
a[0]=3
// a = 'hello'



console.log(fn())