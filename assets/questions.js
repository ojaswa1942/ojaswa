const introductionQuestions = [
	{
    type: 'input',
    name: "name",
    message: "What's your name?",
    validate: (res) => {
      if(!res.length || res=="abc" || res=="asd" || res=="xyz" || res=="aaa")
        return('Invalid name');
      else return true;
    }
  },
  {
    type: 'input',
    name: "email",
    message: "What's your email?",
    validate: (res) => {
      const reg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if(reg.test(res))
        return true;
      else return('Enter valid email');
    }
  }
];

module.exports = {
	introductionQuestions
}