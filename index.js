const process = require("process");
const fs = require("fs");
const clc = require("cli-color");
const inquirer = require("inquirer");
const tree = require("tree-node-cli");
const child_process = require("child_process");

console.log(
  clc.blueBright.bold(
    `Heyy, I am Backend Genie 🧞‍♂️ \nI'll make the basic folder structure for your backend and download the necessary packages for you.`
  )
);

// * arguments
const args = process.argv.splice(2, process.argv.length);

// * tree structure
// const treeStruct = tree(`${process.cwd()}`, {
//   allFiles: true,
//   exclude: [/node_modules/],
//   maxDepth: 4,
// });
// console.log(clc.blueBright(treeStruct));

// * inquirer
inquirer
  .prompt([
    {
      type: "confirm",
      message: "Should we start? ",
      name: "choice",
    },
    // {
    //   type: "checkbox",
    //   message: "Are you sure?1 ",
    //   name: "sure1",
    //   choices: ["React", "Angular", "Vue"],
    // },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.choice == true) {
      console.log("Making folders...");
      fs.mkdirSync(`${process.cwd()}/db`);
      fs.mkdirSync(`${process.cwd()}/model`);
      fs.mkdirSync(`${process.cwd()}/routes`);

      // install module ffi
      child_process.execSync("npm install express", { stdio: [0, 1, 2] });
      child_process.execSync("npm install cors", { stdio: [0, 1, 2] });
      child_process.execSync("npm i jsonwebtoken", { stdio: [0, 1, 2] });
      child_process.execSync("npm i dotenv", { stdio: [0, 1, 2] });
      child_process.execSync("npm i dotenv", { stdio: [0, 1, 2] });
      child_process.execSync("npm i bcryptjs", { stdio: [0, 1, 2] });

      //  * making files and appending the biolerplate code into ir.
      fs.appendFileSync(
        `${process.cwd()}/server.js`,
        `const express = require('express')`
      );
      fs.appendFileSync(`${process.cwd()}/.env`, `PORT=8080`);

      //   fs.link(`${process.cwd()}/db`, "/connection.js", (err) => {
      //     if (err) console.log(err);
      //   });
    }
    console.log(answers.choice);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
