// grab the 'search' field
const search = document.getElementById('search')
const isNum = (code)=>{
    return 32 && code <=126
}

// by convention observables have a trailing $ 
const keyup$ = Rx.Observable.fromEvent(document, 'keyup')

// here is a subscriber
const sub1 = keyup$.pluck('keyCode')
    .filter( isNum ) // only respond 32-126
    .subscribe( (k)=>{
        console.log(`The user typed ${String.fromCharCode(k)}`)
    } )