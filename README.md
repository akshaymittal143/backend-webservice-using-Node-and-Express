# Backend Webservice using NodeJs and Express
[![Build Status](https://travis-ci.org/swagger-api/swagger-ui.svg?branch=master)](https://travis-ci.org/swagger-api/swagger-ui)
[![NPM version](https://badge.fury.io/js/swagger-ui.svg)](http://badge.fury.io/js/swagger-ui)
[![Dependency Status](https://david-dm.org/swagger-api/swagger-ui/status.svg)](https://david-dm.org/swagger-api/swagger-ui)
[![devDependency Status](https://david-dm.org/swagger-api/swagger-ui/dev-status.svg)](https://david-dm.org/swagger-api/swagger-ui#info=devDependencies)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
# Getting Started
* npm start Will begin the server process using Nodemon.
* or gulp
Gulp should open a new browser window for you, but if it doesn't, just point your browser to:
localhost:3000
* I used [postman](https://www.getpostman.com/) for testing the API

# Dependencies
* node.js
* express
* mongoose
* body-parser
* gulp
* gulp-nodemon
* sinon
* gulp-mocha
* gulp-env
* supertest
* First install [node.js](http://nodejs.org/) and [mongodb](https://www.mongodb.org/downloads). Then:

```sh
$ npm init
$ npm install express --save
$ npm install mongoose --save
$ npm install body-parser --save
$ npm install gulp --save
$ npm install gulp-nodemon --save
$ npm install gulp-mocha should sinon --save-dev
$ npm install gulp-env --save-dev
$ npm install supertest --save
```

# To Run tests
* npm test

# Setting up database

* Install MongoDB from here
* Create a C:/data/db folder
* Add Mongo folder to PATH
* Run mongod
* Run mongo
* Install [Robo3t](https://robomongo.org/) for MongoDB GUI
* create a database (eg. eventAPI)
 
