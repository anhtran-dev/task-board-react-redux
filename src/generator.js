function * helloGeneratorFunction() {
    const r = func2();
    yield 123;
    yield 222;
    yield  r.next().value;
    yield  r.next().value;
    return "LOL";


}
function* func2(){
    yield "xxx";
    return 1;
}
function* infiniteLoop() {
    while(true){
        yield 'Listening ...'
    }
}
const result = helloGeneratorFunction();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
const loop = infiniteLoop();
console.log(loop.next());
console.log(loop.next());