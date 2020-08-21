## ojaswa

Resume as a NPM Package

#### How to run?

**Run directly**
- Run `npx ojaswa` in your terminal to run the project.

**Or install globally**
- Run `npm install -g ojaswa` in your terminal
- Run `ojaswa` in your terminal

#### Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer)
- [chalk](https://www.npmjs.com/package/chalk)

#### Project Structure

- */index.js* is the root file.
- */actions.js* contains core functions called from root
- */assets/divider.js* & */assets/box.json* contains functions and resources for drawing lines and indenting
- */assets/endpoint.js* is an example of endpoint recording responses
- */assets/questions.js* contains inquirer question parameters used in */actions.js*
- **_/assets/resume.json_** contains content to be displayed, and can be replaced by your own file

#### Setting up dev enviornment

- Clone the git repo: `git clone https://github.com/ojaswa1942/ojaswa`
- Go to project directory: `cd ojaswa`
- Install node modules: `yarn install`
- Run: `node index.js`