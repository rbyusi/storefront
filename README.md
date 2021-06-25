Thanks for the opportunity of letting me do the code challenge. 

After cloning or downloading this project from github please do the following to set the environment and run the app successfully:

1. Open a terminal and run "npm install
2. After all the project dependcies have been installed make sure to run the json-server by opening a new terminal instance, then run "npm run server". package.json default will run the json-server at your localhost:5000, feel free to change the port if ever 5000 is being used by any other app. If that's done, change the port number in the App.js' code.
3. Open another terminal to run "npm start" to start the app server and open the react app

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Tests

All the tests are located under scr/__test__ folder. To run the tests, open a new terminal then run "npm test". Upon running the command, the tests will be watching the application for any changes and will run the tests on every time the user saves the changes on the code.

Every test will have constants/variables where values can be changed in order to pass or fail the tests(e.g. Products[x].price, id, etc)


