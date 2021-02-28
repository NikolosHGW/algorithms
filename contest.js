const firstArr = [];
const secondArr = [];
let size;   
let res;
let cnt = 0;

function initVar(data, count) {
    switch(count) {
        case 0:
            size = +data[0];
            break;
        case 1:
            for(let i = 0; i < size; i++) {
                firstArr.push(Number(data[i]));
            }
            break;
        case 2:
            for(let i = 0; i < size; i++) {
                secondArr.push(Number(data[i]));
            }
    }
}

function catArr() {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push(firstArr[i].toString());
        result.push(secondArr[i].toString());
    }
    return result.join(' ');
}

process.stdin.on('data', data => {
    let newData = data.toString().split(' ');
    initVar(newData, cnt);
    cnt++;
    if(cnt === 3) {
        res = catArr();
        process.stdout.write(res);
        process.exit();
    }
});