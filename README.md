This project is an application that allows registered users to save their bookmarks. It displays their bookmarks in a card, showing website name and website favicon also allowing them to click to be taken to their saved website. The idea was presented to me through a udemy course, however the udemy course used localstorage ,had no user sign up and was built using vanilla javascript. React solved alot of problems with state management and dom manipulation as alot of what was being displayed was dependant on data that was being fetched from the database and user signin.

This application allows for new registration of users which their input values will be validated and stored on the backend api. Passwords are hashed using bcrypt in which the api will store and compare password entries to allow user protection. The application content is dependant on its state of signin.

Users are able to save their bookmarks in addition to deleting and updating. All requests require a http post to the API and if successful the application will re render its state reflecting the modified database(but not actually retrieving the whole database) to allow the display of updated bookmarks.

Compared to my first project(FACEREC), bookmarks is alot simpler and does not use an foreign api(API in bookmarks was self created). The code is alot cleaner as it does not contain redefined functions. This was achieved through currying functions(functions used for the onchange event), allowing re-useablity without redefining and building a signout component that could also be used as register component.

//Improvements//
Create the ability for users to delete and update their account?
Evolve it from a single user experience to a social media type application where multiple users can see other users bookmarks? - Probably will need state management in order to achieve this?
My css styling skills need to be improved on as the application looks like something straight out of 1997 - Maybe use material UI?
The backend of this project does not have anything to protect its routes - JSON webtoken could be implemented?

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

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

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
