const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question(' Gutom na ba kayo? ', (feelings) => {
    console.log(`${feelings}`);
    readline.close();
})

console.log('Hello world 0');
console.log('Hello world 1');
console.log('Hello world 2');
console.log('Hello world 3');
console.log('Hello world 4');