let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = 0, str = [];
rl.on('line', function (cmd) {
    // let numsC = cmd.split(' ')
    // let nums = numsC.map(e => {
    //     return parseInt(e)
    // })
    // console.log(nums);
    if (n === 0) n = parseInt(cmd);
    else {
        str.push(cmd);
        n--;
        if (n === 0) rl.close();
    }
})

// 监听暂停事件，当input不再输入则触发暂停事件
rl.on('pause', () => {

});

rl.on('close', function () {
    console.log(str);

    process.exit(0);
});
