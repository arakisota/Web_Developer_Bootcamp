let maximum = parseInt(prompt("数字を入力してください："));
while (!maximum) {
    maximum = parseInt(prompt("エラーが起きました。有効な数字を入力してください："));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
let count = 1;

let guess = parseInt(prompt("一つ数字を決めました。数字を当てて見てください！"));
while (parseInt(guess) != targetNum) {
    count += 1;
    if (guess === 'q') {
        break
    }
    if (guess > targetNum) {
        guess = prompt("その数字より小さいです！もう一度当てて見てください：");
    } else {
        guess = prompt("その数字より大きいです！もう一度当てて見てください！");
    }
}

if (guess === 'q') {
    console.log('失敗です');
} else {
    console.log(`おめでとう！ ${count}回で当てました！`);
}