import inquirer from 'inquirer';
import fs from 'fs';
// dynamic list of scripts inside src folder
const scripts = fs
    .readdirSync('./src')
    .filter(file => file.endsWith('.js'));

// console.log(scripts);
function scr(script) {
    import(`./src/${script}`).then(module => {
        module.default();
    }).catch(err => {
        console.log(err);
    });
}
// ask in prompt to select script to run
const prompt = inquirer.prompt([
    {
        type: 'list',
        name: 'script',
        message: 'Select script to run',
        choices: scripts
    }]).then(answers => {
        // console.log(answers);
        const script = answers.script;
        // console.log(script);
        // run script

        scr(script);
    });

console.log(prompt);

