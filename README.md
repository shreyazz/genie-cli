# Genie 🧞

Genie is an utility CLI that makes the life of a developer easy by doing the boring and monotonous tasks.

## What Genie can do for you 🔮

- Backend Builder
  - It helps to setup the basic backend project for developers, by downloading the usual required packages. It also sets up the `server.js` file with boiler plate code to get the server up and running with just one command.
- React Cleaner
  - It let's you clean a react app with unnecessary files and add important folders.
  - Unnecessary Files include:
    - logo.svg
    - reportWebVitals.js
    - App.test.js
  - Important folders include:
    - assets
    - components
    - pages

## How to use Genie ⚡️

- Backend Builder Flag 
  - Run `npx @shreyazz/genie --port <porxt> --backend` to setup a basic backend directly.
- Select Options
  - Run `npx @shreyazz/genie --opts` to view different options and select from them. These options include `React Cleaner` and `Backend Builder`.


## What packages does it download 📦 (Backend Builder)

- Express
- CORS
- DotEnv
- JsonWebToken
- Nodemon (Dev Dependency)

## The boiler plate code which would be initialised by Genie 📤

- Imports the packages
- Uses the required middleware like `express.json()` and `cors()`.
- Setup an `.env`.
- Starts the server on the default 8080 port.

## Future Updates ⚙️

- Component Builder
  - `npx @shreyazz/genie --page AboutPage` This would build an AboutPage folder including `AboutPage.jsx` and `AboutPage.css` inside `src` folder.

