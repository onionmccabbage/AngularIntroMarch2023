// functions - let me count the ways....

// old-skool - tend to avoid
function fnA(){

}

// modern ES
const fnB = x => x*x // if there is only ONE argument and ONE return line, no brackets of any sort
const fnB1 = x => {return x*x} 
// we can optionally proivde default values - after non-default
const fnC = (x, y=2, z)=>x*y // the return is implicit
const fnD = x=>{
    // no need to init 'result'
    result = x*x
    return result // if we have multiple statements we MUST use {} and we MUST state 'return' (or default return)
}
fnC() // x and z will default to undefined