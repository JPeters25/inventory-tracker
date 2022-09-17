# Week 16 Independent Project: Inventory Tracker

#### A React appilcation that will allow the user to add sacks of coffee and sell coffee from the bags by the pound

## Technologies Used

* _JavaScript_
* _JSX_
* _React_
* _CSS_
* _Markdown_

## Description
_Build an application in React that tracks inventory for a local business. We're going to keep this simple: you'll pick one inventory item and track how much of it is remaining as it gets sold or given away. There are a lot of themes to choose from, and you can create your own as long as you're able to track the remaining amount of an inventory item and meet the objectives._

 _At our coffee shop, we sell coffee beans in 1-pound servings, and we get our coffee delivered in large burlap sacks. Here are the details:_

* we sell multiple types of coffee beans, each in different burlap sacks
* one burlap sack contains 130 pounds of coffee beans
* every sale decrements one pound of coffee beans from the burlap sack, until it is empty

_Before getting started, plan out your application and draw a component tree or component diagram that shows the structure of your components. This is a requirement for the project and should be included in your README. You may draw the structure on a piece of paper and take a picture of it or use an application like https://www.draw.io/._

_You are only expected to add CREATE and READ functionality, though you are welcome to implement full CRUD. Here are some user stories to get you started. The application should have the following functionality:_

* As a user, I want to see a list/menu of all available types of coffee beans.
* For each item, I want to see its name, origin, price, and roast (light, medium, or dark) of the coffee bean. (You are welcome to include anything additional that is relevant to the product your store carries.)
* As a user, I want to submit a form to add a new burlap sack of coffee to the inventory.
* As a user, I want to be able to click on a burlap sack to see its detail page.
* As a user, I want to see how many pounds of coffee beans are left in a burlap sack. A burlap sack has roughly 130 pounds.
* As a user, I want to be able to click a button to sell a pound of coffee beans. This should decrease the number of pounds left by 1. The number of pounds in a sack of coffee beans should not be able to go below 0.

## Setup/Installation Requirements

* _clone or download repository to your local computer_
* _navigate into the inventory-tracker and run npm install in the terminal_
* _next run the following command in the terminal: npm run build_
* _finally run the following command in the termal: npm run start_ 

## Known Bugs

* _Sell button does not decrement the total weight of the coffee bag_

## Planning Diagram

![CoffeeBag Graph](/inventory-tracker/src/img/coffeebag%20-diagram.jpg)

* Link https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=coffeebag%20-diagram.drawio#R7VnbcpswEP0aHt3hZkweHRIn7SSZTp2Z9lUG2WgiEAE5tvv1XYHAXBOnBruZdMYPYlfSSnuOji5WDCfY3sQo8u%2BZh6miq95WMa4UXddsXVfET%2FV2mWWijjPDKiaerLQ3zMlvLI2qtK6Jh5NKRc4Y5SSqGl0WhtjlFRuKY7apVlsyWo0aoZWMqO4NcxdR3Kj2k3jcz6z2uFT7FpOVn0fWVOkJUF5ZGhIfeWxTMhnXiuHEjPGsFGwdTEXy8rxk7WYd3mJgMQ75IQ2cm2dff3D16ZQ5u9F0poWjeCR7eUF0LSes6BaF%2Fi59cFkrUcotSwaBYB58J5NjPa9Z7hglKXRTqKDr0TZrJv15R9MoyvuCYWbdVUOAuRxXr4TTY7YOPSymo4J74xOO5xFyhXcD7BOD5gGFLw2KFC0w%2Fc4SwgkLweZCmnAMjhcccwIA39UqBMTzRKRLRMmqtcVUOjiLiuGV858nE6rjbckk8bjBLMA83kEV6R3lLJeLw5Sfmz3TNFgxmdEv0cyypBFJeq%2BKvvcMgIIkwTsIoTcIcYuRB2k4CgyBtVzbIh995G5cTV2x7sq50y5acmcOlTqjkTqHLZcYX6IVmB1IQcxozvRF3A%2FN65kdjKtmLd%2BTNq6qbfm2h0q42SleR0tVgdwdSXinaPUEnGYOCZxVBU43msAZVgtuhj4UbuP349ZE6L1Qa%2FZbULctzVd3q4NDm12hKXGfSCjkAbYgyHSqEzCcRSoZG5LmMvHh2CBOOGKcUMicHuaI0DdGeMBU%2FjFZn9TY2iIzhtm2Iw5FVqtPsiYRCvslK8wp67QJ%2FBFhTsKWuuIVB7D%2BaWS0nKxOS6PJfxp9fBqZ2rlpZH9mGp1hv%2F1Me21xUD8buy%2FOcTCEJHY8V3hezo8axw%2BDv3e6cp8k4vy35jz9rvKV%2B%2BJw%2BIA3xYhnLA6%2BgO2xvR0lL6IFCYvGRUtc3FZhGQQRC3HYfQs6Nf3T61L%2FF6OxdeDFaDIU%2FfPdZYgLLfCiSmZVsGNwpVJbNuj%2BniSMA662dtuThDoYhN0PqgNu0J0SNl8vAsJfXaLl%2FbokOB1ag1JNFPsmQPqExYRQ6GUCEta1qPaI0pSSj6cZZu3ZcTw%2BcM%2FsQzTuZ%2BTx2%2BwH419nv67o4nY7%2B2m3vDr2%2FwgGla5ePwKdSi8aSLXg2QmerZ9TL1rR%2B4snzCHlIhuxI1%2BaelMND7sxDtKFr3LGEVVKz1nLmAXFd9t5%2BywqcRzRzNOpBHzu%2F0NMfaV%2FYo3rPw%3D%3D

## License

* MIT

## Contact Information

_For any questions or contributions please email me at Jmarvel525@gmail.com_

Copyright(c) Sept 2022 Justin Peters

// The followingis auto-generated when using Create-React-App in the terminal

# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
