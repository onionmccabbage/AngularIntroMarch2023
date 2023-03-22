// Typescript has a 'tuple' type
{ // ES block syntax
    // here is a tuple-type
    let poem:[number, boolean, string] // these must be in this order 
    poem = [1, true, 'love']
    console.log(poem, poem[2])
}
// REMEMBER - Typescript is DEVELOPMENT TIME ONLY - it does not make it into the browser
// Two main features of Typescript
// - development-time type-checking
// - language engine - code hinting etc.
