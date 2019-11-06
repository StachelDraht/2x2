const chalk = require('chalk')
const figlet = require('figlet')
const inquirer = require('inquirer')

let user = require('./user')
let newUser = new user()

let points = 0

console.log(
    chalk.blue(
        figlet.textSync('Program 2x2', { horizontalLayout: 'full' })
    )
)

function intro() {
    inquirer.prompt([
        {
            name: 'name',
            message: 'What is your name?'
        }, 
        {
            name: 'qcount',
            message: 'How many questions you want to answer?'
        }
    ]).then(answer => {
        newUser = new user(answer.name)
        newUser.qcount(answer.qcount)
        console.log(`Welcome ${answer.name}! You choose ${answer.qcount} questions. Let's start the game!`)
        game()
    })
}

function random() {
    let max = 10
    let min = 1
    return Math.floor(Math.random() * (max - min) + min)
}

function game() {
    function task(qcount) {
        let a = random()
        let b = random()
        inquirer.prompt([
            {
                name: 'result',
                message: `${a} * ${b}:`
            }
        ]).then(answer => {
            if((a*b) == answer.result) {
                console.log('Right!')
                points++
            } else {
                console.log(`Looser! Correct answer is: ${a * b} `)
            }
            if(qcount == 1) {
                console.log(chalk.blue(`Your score is ${points} from ${newUser.qcount}`))
            } else {
                task(qcount - 1)
            }
        })
    }
    task(newUser.qcount)
}

intro()
