#!/usr/bin/env node
// // TODO: Make more detailed console logs and comment the code
// const process = require("process");
// const fs = require("fs");
// const clc = require("cli-color");
// const inquirer = require("inquirer");
// const tree = require("tree-node-cli");
// const child_process = require("child_process");

// console.log(
//   clc.blueBright.bold(
//     `Heyy, I am Backend Genie 🧞‍♂️ \nI'll make the basic folder structure for your backend and download the necessary packages for you.`
//   )
// );

// // * arguments
// const args = process.argv.splice(2, process.argv.length);

// // * tree structure
// // const treeStruct = tree(`${process.cwd()}`, {
// //   allFiles: true,
// //   exclude: [/node_modules/],
// //   maxDepth: 4,
// // });
// // console.log(clc.blueBright(treeStruct));

// // * inquirer
// inquirer
//   .prompt([
//     {
//       type: "confirm",
//       name: "choice",
//     },
//     // {
//     //   type: "checkbox",
//     //   message: "Are you sure?1 ",
//     //   name: "sure1",
//     //   choices: ["React", "Angular", "Vue"],
//     // },
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//     if (answers.choice == true) {
//       console.log("Making folders...");
//       fs.mkdirSync(`${process.cwd()}/db`);
//       fs.mkdirSync(`${process.cwd()}/model`);
//       fs.mkdirSync(`${process.cwd()}/routes`);

//       // * install module / packages
//       child_process.execSync("npm init -y", { stdio: [0, 1, 2] });
//       child_process.execSync("npm install express", { stdio: [0, 1, 2] });
//       child_process.execSync("npm install cors", { stdio: [0, 1, 2] });
//       child_process.execSync("npm i jsonwebtoken", { stdio: [0, 1, 2] });
//       child_process.execSync("npm i dotenv", { stdio: [0, 1, 2] });
//       child_process.execSync("npm i bcryptjs", { stdio: [0, 1, 2] });
//       child_process.execSync("npm i -D nodemon", { stdio: [0, 1, 2] });

//       //  * making files and appending the biolerplate code into ir.
//       fs.appendFileSync(`${process.cwd()}/.env`, `PORT=8080`);

//       fs.appendFileSync(
//         `${process.cwd()}/server.js`,
//         `
// const express = require('express');
// const app = express();
// require('dotenv').config();
// const cors = require('cors');
// app.use(cors());
// // middlewares
// app.use(express.json());
// const PORT = process.env.PORT || 3001;
// // PORT
// app.listen(PORT, () => console.log('Server started on PORT Number: ' + PORT))
// `
//       );
//     }
//     console.log(answers.choice);
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: Make more detailed console logs and comment the code
const process = require("process");
const fs = require("fs");
const clc = require("cli-color");
const inquirer = require("inquirer");
const tree = require("tree-node-cli");
const child_process = require("child_process");

console.log(
  clc.blueBright.bold(
    `Heyy, I am Genie 🧞‍♂️. I can build: \n1. Basic backend folder structures with all the required packages and boiler plate code\n2. Clean your react project by removing all the unnecessary files and adding all the necessary folders. `
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
    // {
    //   type: "checkbox",
    //   message: "Are you sure?1 ",
    //   name: "sure1",
    //   choices: ["React", "Angular", "Vue"],
    // },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.choice == "Backend Builder") {
      console.log("Making folders...");
      fs.mkdirSync(`${process.cwd()}/db`);
      fs.mkdirSync(`${process.cwd()}/model`);
      fs.mkdirSync(`${process.cwd()}/routes`);
      // * install module / packages
      child_process.execSync("npm init -y", { stdio: [0, 1, 2] });
      child_process.execSync("npm install express", { stdio: [0, 1, 2] });
      child_process.execSync("npm install cors", { stdio: [0, 1, 2] });
      child_process.execSync("npm i jsonwebtoken", { stdio: [0, 1, 2] });
      child_process.execSync("npm i dotenv", { stdio: [0, 1, 2] });
      child_process.execSync("npm i bcryptjs", { stdio: [0, 1, 2] });
      child_process.execSync("npm i -D nodemon", { stdio: [0, 1, 2] });
      //  * making files and appending the biolerplate code into ir.
      fs.appendFileSync(`${process.cwd()}/.env`, `PORT=8080`);
      fs.appendFileSync(
        `${process.cwd()}/server.js`,
        `
      const express = require('express');
      const app = express();
      require('dotenv').config();
      const cors = require('cors');
      app.use(cors());
      // middlewares
      app.use(express.json());
      const PORT = process.env.PORT || 3001;
      // PORT
      app.listen(PORT, () => console.log('Server started on PORT Number: ' + PORT))
      `
      );
      // console.log("Backend Builder selected");
    } else if (answers.choice == "React Cleaner") {
      fs.unlinkSync(`${process.cwd()}/src/reportWebVitals.js`);
      fs.unlinkSync(`${process.cwd()}/src/setupTests.js`);
      fs.unlinkSync(`${process.cwd()}/src/App.test.js`);
      fs.mkdirSync(`${process.cwd()}/src/components`);
      fs.mkdirSync(`${process.cwd()}/src/assets`);
      fs.mkdirSync(`${process.cwd()}/src/pages`);
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
