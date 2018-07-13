const readline = require('readline');
const completer = (line) => {//completer  completer 函数会获取用户输入的当前行作为参数，并返回一个包含以下两个条目的数组： 一个包含匹配补全输入的数组。 用于匹配的子字符串。
    // console.log(line)
    const command = 'npm';
    const subCommands = ['help', 'init', 'install'];
    // 少于command时补全， line是command的一部分，按tab补全一下
    if (line.length < command.length ) {
        return [ command.indexOf(line) === 0 ? [command] : [], line]
    }
    // npm之后 三个命令都出来 
    // npm i 出来 install init  不要help
    let hints = subCommands.filter(subCommand => {
        const lineTrippedCommand = line.replace(command, '').trim();
        return lineTrippedCommand && subCommand.indexOf(lineTrippedCommand) ===0
    });
    //匹配到一个
    if (hints.length == 1) {
        hints = hints.map(function(hint) {
            return [command, hint].join(' ')
        })
    }
    //匹配到多个
    return [hints.length ? hints : subCommands, line];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    completer: completer//自动补全
})

rl.prompt()