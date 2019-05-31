const {introductionQuestions} = require('./assets/questions.js')

const introduction = async (inquirer) =>{
  console.log("Hello, thanks for visiting..");
  console.log("You can know more about me here");
  
  await inquirer.prompt(introductionQuestions)
  .then(intro => {
    console.log(`Hello ${intro.name}!`);
  })
}

module.exports = {
  introduction
}