let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (cmd) {
    let numsC = cmd.split(' ')
    let nums = numsC.map(e => {
        return parseInt(e)
    })
    console.log(nums);
})
