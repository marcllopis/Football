# Football App

## What's that?
This small app was created to work and test the latest React version `version 16.8`.

It uses the [football-data.org](https://www.football-data.org/) API to pull all football games and data from major leagues and teams. The user will be able to browse around different leagues and teams per league using a 3D carousel that will adapt to the number of teams or leagues that comes from the API. Once a team is selected it will show all the info about upcoming games, results and scoreboard among others.

You can check the app [here](https://football-app.marcllopis89.now.sh/team-info)

## How does it work?
### State management
The app is wrapped around a React Context object that will be the main provider for the state of the app. With the new `useReducer` functionality the app will simulate the `Redux` actions / reducers but always without using the actual library.

The league and team info will be saved on the app store for further use on different components and league and team actions and reducers will be combined on the main app reducer

### Pulling info from the API
There are the main leagues hardcoded on the app code since the free version of the API will only allow some leagues, but still will loop around all the info from their database.

Once the user select a league and a team, all the info about the team will be displayed through several API calls (could be found on [api/api-calls.js](./src/api/api-calls.js)). Using the new feature `useEffect` the app will handle all API calls, show a loader icon while looking for that info and show the actual content when it's ready.

### Routes
The app has some simple routing around and it's the main store that will control on which route you are with the boolean parameters `leagueSelected` and `teamSelected`. When those parameters turn true, the step can be rendered, if false, it will always go back to `/leagues` (since you always need a team to render some team info)

## TODO's
 - Improve the overall app styles and approach mobile design
 - Detect the errors from the API calls (teams and data not coming back) and show a workaround of it
 - Add unit testing (`Jest`) and E2E testing (`Cypress`)




## Start the project
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
