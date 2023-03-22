// a typical problem
function getElementZero(a:Array<string>):string{ // we could use any but better to use generics
    return a[0] // return the member at position zero
}
// we can solve using generics
const getZeroethElement = <T>(a:Array<T> | string):T|string=>{
    return a[0]
}

const arr:Array<string> = ['Tea', 'Coffee', 'Water']
const arr2:Array<number> = [1, 2, 3, 4,7]

const str:string= 'Vodka'

console.info( getZeroethElement(arr) )
console.info( getZeroethElement(arr2) )
console.info( getZeroethElement(str) )