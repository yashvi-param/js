//nn bb ss u --primitives in js
//n=null, n=number, b=boolean, b=bigint, s=string, s=symbol, u=undefined

let a=null;
let b=1;
let c=true;
let d=BigInt("567")
let e="hello"
let f=Symbol("world")
let g=undefined;
console.log(a, b, c, d, e, f, g)
console.log(typeof d)


// non-primitive data types objects in js
const item={
    "abc" : true,
    "def" : false,
    "ghi" : 123,
    "jkl" : undefined
}
console.log(item["trz"])
