const fetch = require('node-fetch');
const chalk = require('chalk');
const {introductionQuestions, exitBack, resumeList} = require('./assets/questions.js')
const dividerConstructor = require("./assets/divider.js");

const back = chalk.bgRgb(58,58,58);
const title = chalk.bold.rgb(245, 229, 27);
const response = chalk.rgb(255,99,71);
//Used functions to calculate node
const widthOfTerminal = () => process.stdout.columns;
const divider = () => new dividerConstructor(widthOfTerminal()-2, "white", back);


const introduction = async (inquirer) =>{
  console.log("Hello, thanks for visiting..");
  console.log("You can know more about me here");
  
  await inquirer.prompt(introductionQuestions)
  .then(intro => {
    console.clear();
    console.log(`Hello ${intro.name}!`);
    recordUser(intro.name, intro.email);
  })
}

const recordUser = (name, email) => {
  fetch("https://api.ojaswa.com/ojaswa", {
    method: 'post',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify({ name, email })
  })
  .then(res => {
    if(res.status !== 200)
      throw('This so sad');
  })
  .catch(err => {
    console.log(err)
    //do nothing & eat the error
  })
}

const handleResume = (inquirer, resume) => {
  inquirer.prompt(resumeList(resume)).then(answer => {
    if (answer.resumeOptions == "Exit") {
      return;
    }
    var option = answer.resumeOptions;

    divider().printTop();

    resume[`${option}`].forEach((info, ind) => {
      if (typeof info === "string") {
        console.log(divider().containString(`  ${info}`, response));
      } else {
        Object.values(info).forEach((value, ind) => {
          if (ind > 1) {
            console.log(divider().containString(`${value}`, response));
          } else if (ind == 1) {
            console.log(divider().containString(`${value}`, chalk.cyan.bold));
          } else {
            console.log(divider().containString(`${value}`, title));
          }
        });
        ind !== resume[`${option}`].length - 1 && divider().printLine();
      }
    });

    divider().printBottom();

    inquirer.prompt(exitBack)
    .then(choice => {
      if (choice.exitOrBack == "Back") {
        process.stdout.write("\033c");
        handleResume(inquirer, resume);
      } else {
        return;
      }
    });
  });
}

module.exports = {
  introduction,
  handleResume
}