This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## netflix-mock-react

The task is to create a mock Netflix like page with editable rows of titles using React and Redux.

Given the following JSON object which will serve as mock back­end data:
{
    "mylist": [
        {
            "title": "Futurama",
            "id": 1,
            "img": "http://cdn1.nflximg.net/webp/7621/3787621.webp"
        },
        {
            "title": "The Interview",
            "id": 2,
            "img": "http://cdn1.nflximg.net/webp/1381/11971381.webp"
        },
        {
            "title": "Gilmore Girls",
            "id": 3,
            "img": "http://cdn1.nflximg.net/webp/7451/11317451.webp"
        }
    ],
    "recommendations": [
        {
            "title": "Family Guy",
            "id": 4,
            "img": "http://cdn5.nflximg.net/webp/5815/2515815.webp"
        },
        {
            "title": "The Croods",
            "id": 5,
            "img": "http://cdn3.nflximg.net/webp/2353/3862353.webp"
        },
        {
            "title": "Friends",
            "id": 6,
            "img": "http://cdn0.nflximg.net/webp/3200/9163200.webp"
        }
    ]
}

The top row will be the 'My List' row and will display the titles included in 'mylist' array. The second row will be the recommendation row which will display the titles included in 'recommendations' array. Hovering over an image in the 'My List' row should create a "Remove" button displayed below the image. Clicking on the button should remove the title from the "My List" row. Hovering over an image in the recommendations row should create an "Add" button displayed below the image. Clicking on the button should add the title to the "My List" row. The list of titles in the "My List" row should be displayed at the bottom of the page.

## Available Scripts

In the project directory, you can run:

### `node server.js`
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
