
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAT>'//命令行里自动化的
})

const preHint = `This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See \`npm help json\` for definitive documentation on these fields
and exactly what they do.

Use \`npm install <pkg> --save\` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
`
console.log(preHint)

let index = 0;
const questions = ['name', 'version', 'author'];
const defaultAnswers = ['name', '1.0.0', 'none']//用户一直默认的回答
const answers = [];//收集用户的回答
function createPackageJSON() {
    // json怎么准备
    let map = {};
    questions.forEach((question, index) => {
        map[question] = answers[index];
    })
    fs.writeFileSync('./package.json', JSON.stringify(map, null, 4))
}

function runQuestionLoop() {
    if (index === questions.length) {
        createPackageJSON()
        rl.close();
        return;
    }
    let defaultAnswer = defaultAnswers[index];
    let question = questions[index] + ':(' + defaultAnswer + ')'
    rl.question(question, function(answer) {
        answers.push(answer || defaultAnswer)
        index ++;
        runQuestionLoop()
    })
    
}

runQuestionLoop()