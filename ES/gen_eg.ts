// we sometimes need a large collection of values without persisting in memory
const fib_seq = [1, 2, 3, 5, 8, 13, 21, 34] // these live in memory

// here is a generator he asterisk and the yield make it a generator
function* fib(){ // the values NEVER persist in memory
    let first=1, second=2
    // let i=0; i<Number.POSITIVE_INFINITY; i++
    // start; stop-before; step
    for(;;){ // an endless loop
        let sum = first+second
        yield sum
        first = second
        second = sum
    }
}

const prettyPrint=(item)=>{
    console.log( JSON.stringify(item) )
}

// use the code
const iter = fib()
prettyPrint( iter.next() ) // 3
prettyPrint( iter.next() ) // 5
prettyPrint( iter.next() ) // 8
prettyPrint( iter.next() ) // 13
