# Genie 🧞

Genie is an utility CLI that makes the life of a developer easy by doing the boring and monotonous tasks.

## What Genie can do for you 🔮

- Backend Builder
  - It helps to setup the basic backend project for developers, by downloading the usual required packages. It also sets up the `server.js` file with boiler plate code to get the server up and running with just one command.
- React Cleaner
  - it lets you clean a react app with unnecessary files and add important folders.
  - Unnecessary Files include:
    - logo.svg
    - reportWebVitals.js
    - App.test.js
  - Important folders include:
    - assets
    - components
    - pages

## How to use Genie ⚡️

- Backend Builder Feature
  - Run `npx @shreyazz/genie` and select Backend Builder. Run this in an empty folder where you want your backend.
- React Cleaner Feature
  - Run `npx @shreyazz/genie` and select React Cleaner. Run this in your `create-react-app` home directory.

## What packages does it download 📦 (Backend Builder)

- Express
- CORS
- DotEnv
- jsonwebtoken
- Nodemon (Dev Dependency)

## The boiler plate code which would be initialised by Genie 📤

- Requires the packages
- Uses the required middleware like `express.json()` and `cors()`
- Starts the server on the default 8080 port.

## Future Updates ⚙️

- A feature to give the server port number as a CLI argument
  - `npx @shreyazz/genie@latest —-port=5000`
- A feature to make dynamic files according
- Component Builder (like in Angular12/Angular13)
  - `npx @shreyazz/genie cc navbar` This would build a navbar folder including `NavBar.jsx` and `NavBar.css`
  - This feature will also roll out with a `—-styled` flag which would install styled-components and make `NavBarElements.js` instead of `NavBar.js` .
