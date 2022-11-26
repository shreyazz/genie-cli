#!/usr/bin/env node

const process = require("process");
const fs = require("fs");
const clc = require("cli-color");
const inquirer = require("inquirer");
const child_process = require("child_process");
const arg = require("arg");

console.log(
  clc.blueBright.bold(
    `\nHeyy, I am Genie 🧞‍♂️. I can build: \n1. Basic backend folder structures with all the required packages and boiler plate code\n2. Clean your react project by removing all the unnecessary files and adding all the necessary folders.\n`
  )
);

const args = arg({
  "--port": Number,
  "--page": [String],
  "--backend": Boolean,
  "--opts": Boolean,
});


const buildBackend = (port = 8080) => {
  console.log("Building folders and initializing your server...⛳️");
  console.log(
    "This might take a few seconds...⏳ (Genie: I am getting things ready for you)"
  );
  fs.mkdirSync(`${process.cwd()}/model`);
  fs.mkdirSync(`${process.cwd()}/routes`);
  fs.appendFileSync(`${process.cwd()}/.env`, `\nPORT=${port}\n`);
  // * install module / packages
  child_process.execSync("npm init -y", { stdio: [] });
  child_process.execSync("npm install express", { stdio: [] });
  child_process.execSync("npm install cors", { stdio: [] });
  child_process.execSync("npm i jsonwebtoken", { stdio: [] });
  child_process.execSync("npm i mongoose", { stdio: [] });
  child_process.execSync("npm i dotenv", { stdio: [] });
  child_process.execSync("npm i bcryptjs", { stdio: [] });
  child_process.execSync("npm i -D nodemon", { stdio: [] });

  //  * making files and appending the biolerplate code into server.js file.

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
      "Folders are created and server.js is initialized with boilerplate code...\n Happy Coding ✨"
    )
  );
};

const giveOpts = () => {
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
        inquirer
          .prompt([
            {
              type: "list",
              name: "MongoDB URI",
              choices: ["I have mongoDB URI", "I do not have a mongoDB URI"],
            },
          ])
          .then((ans) => {
            if (ans["MongoDB URI"] == "I have mongoDB URI") {
              inquirer
                .prompt({
                  type: "input",
                  name: "URI",
                  message: "Enter your mongo URI here",
                })
                .then((ans) => {
                  fs.appendFileSync(
                    `${process.cwd()}/.env`,
                    `JWT_SECRET=secret\nmongo_URI=${ans.URI}`
                  );
                  fs.mkdirSync(`${process.cwd()}/db`);
                  fs.appendFileSync(
                    `${process.cwd()}/db/connection.js`,
                    `
          const mongoose = require('mongoose')
          require('dotenv').config()
          const mongo_URI = process.env.mongo_URI
          const connectToDB = async () => {
              mongoose.connect(mongo_URI, (err) => {
                  if(err) console.log('Can not connect to the DB 🔴')
                  console.log('Connected to the DB 🟢')
              })
          }
          // mongodb+srv://sangam:sangam@cluster0.5iqyskn.mongodb.net/?retryWrites=true&w=majority
          module.exports = connectToDB;
          `
                  );
                  buildBackend();
                });
            } else {
              fs.appendFileSync(
                `${process.cwd()}/.env`,
                `JWT_SECRET=secret\n`
              );
              fs.mkdirSync(`${process.cwd()}/db`);

              buildBackend();
            }
          });
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
      } else {
        console.log(clc.redBright("Something went wrong...😓"));
      }
    });
};


const isCreateBackend = args["--backend"];
const isOpts = args['--opts'];

if (isCreateBackend) {
  buildBackend(args["--port"]);
}else if(isOpts){
  giveOpts();
}

