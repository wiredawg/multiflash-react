# Multiflash

This is a simple app for multiplaction practice for kids.

This app is written using the [ReactJS frontend JavaScript framework](https://reactjs.org/). It is meant to run in your web browser. You can access it [here](https://wiredawg.github.io/multiflash-react/)

In order to develop the application, you must build it using the `create-react-app` package found through the Node Package Manager (npm). Node is a server-side JavaScript programming environment. See the [React-Guide-SAVED.md](https://github.com/wiredawg/multiflash-react/blob/master/React-Guide-SAVED.md) file for information on how to do this.

## Source Code Overview

Overview of the root directory:
```
$ tree .
|- public/        # The entry HTML file that your browser needs to load the app
|- src/           # The app's source code
|- ...
`- package.json   # The npm setup file that also holds the build/publish commands
```
Overview of the `src` directory:
```
$ tree src/
|- components/     # Contains the files that make up the business-logic of the app
|  |- app.js       # This is the main script that glues everything together. It provides the algorithms.
|  |- controls.js  # This script provides declaration for each "moving piece" of the app
|  `- exprbox.js   # This script provides declaration for the expression box 
|- css/
|  `- app,css      # The Cascading Stylesheet used to give the app's UI some shape
`- index.js        # The entry point of the JS application, contains the app's root element identified by public/index.html
```
