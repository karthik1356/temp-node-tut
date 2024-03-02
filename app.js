//modules
const names=require('./names')
const hello=require('./utils')
const xmodule=require('./x')
require('./exampllef')
console.log(names.alok)
hello('siddu')
hello(names.kelly)
console.log(xmodule)
// sayhi(alok)
// output
// The sum is:12
// alok
// Hello siddu,I am karthik
// Hello kelly,I am karthik
// { items: [ 'item1', 'item2' ], singleperosn: { name: 'bob' } }
// sayhi(kelly)