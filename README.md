# IMPORTANT

Download and install the back-end for this application before continuing with this tutorial.
The back-end and its documentation can be found here:

**https://github.com/august-ronne/iv1201-auth**


____

# IV1201 Project Group #16: Recruitment Application Front-end

**All links in this README are functioning as of 23/02/2021**

This is the front-end of a reqruitment application built for the KTH Royal Institute of Technology course "IV1201 Arkitektur och design av globala applikationer" (official title), or translated to English, "IV1201 Architecture and Design of Global Applications".


- [Visit official website of the KTH Royal Institute of Technology](https://www.kth.se)


- [Visit official webpage of the IV1201 course](https://www.kth.se/student/kurser/kurs/IV1201)

## Application Explained

The application requirements and description can be found in the pdf linked below:

 https://github.com/august-ronne/iv1201-front-end/blob/master/application-description.pdf

The application currently implements **Use Case 5.1 (Create Account)**, and **Use Case 5.2 (Login)**.
To read about these use cases in greater detail, please refer to the application description linked above.

The **Register** and **Login** pages are reachable from the **Home** page menu:

<kbd><img src="/readme-images/readme-img-home.png" width="600" height="400"></kbd>

This is the application **Register** page:

<kbd><img src="/readme-images/readme-img-register.png" width="600" height="400"></kbd>

This is the application **Login** page:

<kbd><img src="/readme-images/readme-img-login.png" width="600" height="400"></kbd>

## Tools Required to Install and Run Application

The requirements listed here need to be met before downloading the code and installing the project in your local environment.
- **[Node.js](https://nodejs.org/en/)**: This front-end is built using Node.js. You need to install Node.js to run this application.
- **[npm](https://www.npmjs.com/)**: The Node Package Manager (npm) is used to build the application and install the frameworks it uses. You need to install npm to run this application.

## Installation and Configuration

1. Clone the repository and run the command `npm install` inside of the root directory. This will install the necessary dependencies.
2. Create a file called `.env` in the root directory. Instructions on what needs to be in the file can be found in the file `.env.example`

## Run Front-end in Development Environment

1. Start the application back-end following the instructions found in the back-end README (if you haven't yet installed the back-end, stop and do that first).
2. In the `client` directory, run the command `npm start`.
3. Open https://localhost:3000 on your local machine to view the front-end.

## Run Front-end Tests in Development Environment

To run tests against the front-end development environment, run the command `npm test` in the `client` directory.
This command will launch the test runner in interactive watch mode.
This will run all tests in sequence and output the results in the terminal window that was used run the `npm test` command.

## Build App for Production

To build the application for production, run the command `npm run build` in the `client` directory.

Instead of providing a sub-par explanation of the `build` script, we cite
the [create-react-app documentation](https://create-react-app.dev/docs/documentation-intro):

>Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

>The build is minified and the filenames include the hashes.Your app is ready to be deployed!

>See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information."

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

### Application Structure Explained

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

**Styles**
Every CSS file is placed here

**Tests**
Contains acceptance tests

## Frameworks Used

The frameworks that are listed below are installed in your project when you run the `npm install` command.
To read more about any of these frameworks, visit the [npm website](https://www.npmjs.com/) and copy the
**exact** framework name from the list below and paste it in their search bar.

* hookform/resolvers
* testing-library/jest-dom
* testing-library/user-event
* babel-core
* babel-preset-airbnb
* babel-preset-es2015
* babel-preset-react
* babel-preset-stage-0
* chromedriver
* formik
* geckodriver
* node-fetch
* react
* react-dom
* react-formal
* react-hook-form
* react-router
* react-router-dom
* react-scripts
* selenium-webdriver
* sinon
* web-vitals
* yup
