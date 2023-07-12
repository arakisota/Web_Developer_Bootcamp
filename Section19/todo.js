let TASK = [];
let option = ['new', 'list', 'delete', 'quit']
let command = prompt('コマンドを入力してください(new, list, delete, quit)');

while (command !== 'quit') {
    while (!option.includes(command)) {
        command = prompt('再度コマンドを入力してください(new, list, delete, quit)');
    }
    if (command === 'new') {
        let newTodo = prompt('新しいTODOを入力してください');
        TASK.push(newTodo);
        console.log(`「${newTodo}」を追加しました`);
    } else if (command === 'list') {
        console.log('*'.repeat(20));
        for (let i = 0; i < TASK.length; i++) {
            console.log(`${i}: ${TASK[i]}`)
        }
        console.log('*'.repeat(20));
    } else if (command === 'delete') {
        const deleteIndex = parseInt(prompt('削除するインデックスを入力してください'));
        console.log(`「${TASK[deleteIndex]}」を削除しました`)
        TASK.splice(deleteIndex, 1);
    }
    command = prompt('コマンドを入力してください(new, list, delete, quit)');
}
console.log('アプリを終了しました');