# IMPORTANT
Download and install the back-end for this application before continuing with this tutorial.
The back-end and its documentation can be found here:

**https://github.com/august-ronne/iv1201-auth**

All links are functioning as of 23/02/2021
---
# IV1201 Project Group #16: Recruitment Application Front-end

This is the front-end of a reqruitment application built for the KTH Royal Institute of Technology course "IV1201 Arkitektur och design av globala applikationer" (official title), or translated to English, "IV1201 Architecture and Design of Global Applications".


- [Visit official website of the KTH Royal Institute of Technology](https://www.kth.se)


- [Visit official webpage of the IV1201 course](https://www.kth.se/student/kurser/kurs/IV1201)

## Summary of Application

The application requirements and description can be found in the pdf below:

 https://github.com/august-ronne/iv1201-front-end/blob/master/application-description.pdf

The application currently implements **Use Case 5.1 (Create Account)**, and **Use Case 5.2 (Login)**.
To read about these use cases in greater detail, please refer to the application description linked above.

The **Register** and **Login** pages are reachable from the **Home** page menu:



## Requirements

The requirements listed here need to be met before downloading the code and installing the project in your local environment.
- **[Node.js](https://nodejs.org/en/)**: This front-end is built using Node.js. You need to install Node.js to run this application.
- **[npm](https://www.npmjs.com/)**: The Node Package Manager (npm) is used to build the application and install the frameworks it uses. You need to install npm to run this application.

## Installation

Clone the repository and run the command `npm install` inside of the `client` directory. This will install the necessary dependencies.

## Run Front-end in Development Environment

1. Start the application back-end following the instructions found in the back-end README (if you haven't yet installed the back-end, stop and do that first).
2. In the `client` directory, run the command `npm start`.
3. Open https://localhost:3000 on your local machine to view the front-end.

## Run Front-end Tests

To run tests against the front-end development environment, run the command `npm test` in the `client` directory.
This will run all tests in sequence and output the results in the terminal window that was used run the `npm test` command.

## Front-end Structure
The file tree contained in the `src` directory looks as follows:
```
src
├── Components
│   ├── Admin.js
│   ├── ...
│   └── UsersOnly.js
├── Context
│   └── AuthContext.js
├── HoCs
│   ├── AdminRoute.js
│   ├── ...
│   └── PublicRoute.js
├── Models
│   ├── LoginFormModel.js
│   └── RegisterFormModel.js
├── Services
│   └── AuthService.js
├── Styles
│   └── App.css
├── test
│   └── acceptance.test.js
├── App.js
├── App.test.js
├── index.js
├── registerServiceWorker.js
├── setupTests.js
└── translation.js
 ```
The front-end is built using the React framework. While the general architecture of the front-end will be explained here, the best place to start for anyone without any previous React experience that wishes to continue developing this project would be to consult the official React documentation:
- [Tutorial: Intro to React](https://reactjs.org/tutorial/tutorial.html)
- [React - A JavaScript library for building user interfaces](https://reactjs.org/)

### File Tree Explained

**Components**

Every component in this directory can be said to represent its own view. Some of them, like `Message.js`, is only rendered as an inner component of other components, but could theoretically be rendered on its own.

**Context**

The global state of the front-end is stored here. Currently the global state consists of the status of the user browsing the front-end, for example if the user is authenticated or not. Each component in the whole front-end will have access to the global state.

**HoCs**

HoCs stands for Higher-order Components. These components can not be considered as views on their own, but rather encapsulates other view components in order to generalize some functionality.

**Models**

In this application only the html forms are modeled in the `Models` directory, but other models could be added here if you would need to.
The forms modeled here are used in the `Register.js` and `Login.js`components. The models are created in order to supply the forms with validation.

**Services**
The files in this directory are responsible for calling the API of the back-end/back-ends the front-end wishes to use.

# OLD README BELOW (SAVE FOR NOW)

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
