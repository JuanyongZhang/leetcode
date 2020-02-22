// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// var stdin = '';
// process.stdin.on('data', function (chunk) {
//     stdin += chunk;
// }).on('end', function () {
//     var lines = stdin.trim().split('\n');
//     for (var i = 0; i < lines.length; i++) {
//         const input = lines[i];
//         process.stdout.write(execute(input));
//     }
// });

const execute = (input) => {
    let nums = input.split(',').map(Number).sort((a, b) => a - b);
    return nums.pop() - nums.shift()
}

console.log(execute(
    '1,2,10,0,3,9'
))
console.log(execute(
    '4,-9,-3,0,7,9'
))