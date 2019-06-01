#!/usr/bin/env node

const inquirer = require("inquirer");
const resume = require("./assets/resume.json");
const {introduction, handleResume} = require("./actions.js");

const main = async () => {
  console.clear();
  await introduction(inquirer);
  await handleResume(inquirer, resume);
};
main();
