# Santa's Helper
## Overview
This application is a full stack application where users can create wish lists of Christmas gifts and denote whether each item has been bought and wrapped. Users will also be able to keep a "wishlist for Santa" called Santa's Secrets.

## Deployed Link
TBD


## User Stories
As a user I want the ability to...
  - sign in  or register
  - make a wishlist for each your loved ones
  - add profile pictures for each loved one
  - see your wishlist
  - see all wishlists
  - add wishlists
  - delete wishlists
  - update wishlists
  - add gifts to wishlists 
  - delete gifts
  - update gifts
  - mark whether a gift has been bought
  - mark whether a gift has been wrapped
  - make a Santas Secrets List for each of your loved ones that's related to their wishlist 


## Stretch	Goals
- add a field for where the gift is stored
  
    
## Technology Used
  - HTML
  - CSS
  - Express.js
  - React
  - Django/MongoDB
  - React -Bootstrap
  
  
## Application Wire Frames
![wireframe1](/images/WF1-SantasHelper.png "WireFrame1")
![wireframe2](/images/WF2-SantasHelper.png "WireFrame2")
![wireframe3](/images/WF3-SantasHelper.png "WireFrame3")
![wireframe4](/images/WF4-SantasHelper.png "WireFrame4")
![wireframe5](/images/WF5-SantasHelper.png "WireFrame5")
![wireframe6](/images/WF6-SantasHelper.png "WireFrame6")
![wireframe7](/images/WF7-SantasHelper.png "WireFrame7")


## Entity Relationship Diagrams
![erd](/images/ERD-SantasHelper2.png "ERD")


## Route Table
| HTTP METHOD| URL PATH               | ACTION            | CRUD    |

| GET        | /santasHelper          | Index or list     | Read    |

| GET        | /santasHelper/:id      | Show or Retrieve  | Read    |

| GET        | /santasSecrets/:id     | Show or Retrieve  | Read    |

| POST       | /santasHelper          | Create            | Create  |

| POST       | /santasSecrets/        | Create            | Create  |

| PUT        | /santasHelper/edit/:id | Update (edit)     | Update  |

| PUT        | /santasSecrets/edit/:id| Update (edit)     | Update  |

| PUT        | /santasSecrets/edit/:id| Update (edit)     | Update  |


## Schedule
- Friday 11/18: Project Planning, finish Readme, including wireframes and ERDs
- Monday 11/21: Pitch idea, Seed db, Get the back end going
- Tuesday 11/22: Testing with postman and make sure Back End is nearly good to go.
- Saturday 11/26: Finish up Back End and start on Front End React
- Sunday 11/27: Front End
- Monday 11/28: Front End React, should be near MVP
- Tuesday 11/29: Goal: MVP status, Work on Front End Styling, Deployment Party
- Wednesday 11/30: Polish all details
- Thursday 12/1: Polish all details
- Friday 12/2: Presentation Day


## MVP
- An app that looks and functions at least as well as the Pet App we did in class, with a navigation bar, and div boxes that display the users resources and allows the user to edit and delete them as well as make updates to them and make secret lists for stocking stuffers.


## Example Seed Data 
```
const startGifts = [
    { name: "James", gift: "Schitt's Creek Game", type: "board game", bought: true, wrapped: true },
    { name: "Vivi", gift: "Art Class Sweater", type: "clothing", bought: true, wrapped: false },
    { name: "Beth", gift: "Magic Mixies", type: "toy", bought: false, wrapped: false },
    { name: "Ryleigh", gift: "christmas pjs", type: "clothing", bought: false, wrapped: false },
    { name: "Gavin", gift: "christmas pjs", type: "clothing", bought: false, wrapped: false }
]
```


# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



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
