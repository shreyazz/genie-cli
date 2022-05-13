#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const clc = require("cli-color");
const inquirer = require("inquirer");
const tree = require("tree-node-cli");
const child_process = require("child_process");

console.log(
  clc.blueBright.bold(
    `\nHeyy, I am Genie 🧞‍♂️. I can build: \n1. Basic backend folder structures with all the required packages and boiler plate code\n2. Clean your react project by removing all the unnecessary files and adding all the necessary folders.\n`
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
      type: "list",
      name: "choice",
      choices: ["Backend Builder", "React Cleaner"],
    },
  ])
  .then((answers) => {
    if (answers.choice == "Backend Builder") {
      console.log("Building folders...🔨");
      console.log("Initializing your server...⛳️");
      fs.mkdirSync(`${process.cwd()}/db`);
      fs.mkdirSync(`${process.cwd()}/model`);
      fs.mkdirSync(`${process.cwd()}/routes`);
      // * install module / packages
      child_process.execSync("npm init -y", { stdio: [] });
      child_process.execSync("npm install express", { stdio: [] });
      child_process.execSync("npm install cors", { stdio: [] });
      child_process.execSync("npm i jsonwebtoken", { stdio: [] });
      child_process.execSync("npm i dotenv", { stdio: [] });
      child_process.execSync("npm i bcryptjs", { stdio: [] });
      child_process.execSync("npm i -D nodemon", { stdio: [] });
      //  * making files and appending the biolerplate code into ir.
      fs.appendFileSync(`${process.cwd()}/.env`, `PORT=8080`);
      fs.appendFileSync(
        `${process.cwd()}/server.js`,
        `
      const express = require('express');
      const app = express();
      require('dotenv').config();
      const cors = require('cors');

      // middlewares
      app.use(cors());
      app.use(express.json());
      
      // defining port
      const PORT = process.env.PORT || 3001;
      
      // setting up an empty GET Route
      app.get('/', (req, res)=>{res.json({message: "You've come to the right place... it's a GET request!!"})});
      
      // Starting Server on PORT
      app.listen(PORT, () => console.log('Server started on PORT Number: ' + PORT))
      `
      );
      console.log(
        clc.blueBright(
          "Folders are created and server.js is initialized with boiler plate code...\n Happy Coding ✨"
        )
      );
      // console.log("Backend Builder selected");
    } else if (answers.choice == "React Cleaner") {
      fs.unlinkSync(`${process.cwd()}/src/reportWebVitals.js`);
      fs.unlinkSync(`${process.cwd()}/src/setupTests.js`);
      fs.unlinkSync(`${process.cwd()}/src/App.test.js`);
      fs.mkdirSync(`${process.cwd()}/src/components`);
      fs.mkdirSync(`${process.cwd()}/src/assets`);
      fs.mkdirSync(`${process.cwd()}/src/pages`);
      console.log(
        clc.blueBright(
          "Folders are created and files are deleted... \n Happy Coding ✨"
        )
      );
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(clc.redBright("Some error occured with the prompt"));
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log(clc.redBright("Something went wrong...😓"));
    }
  });
