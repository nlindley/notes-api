# Notes API #

Description
===========

A simple RESTful API that uses 5 CRUD routes. Built as the backend for a notes application.

* Create a note

    `CREATE ~/api/notes/`
* Read all notes

    `GET ~/api/notes/`
* Read a single note

    `GET ~/api/notes/id`
* Update a single note

    `PUT ~/api/notes/id`
* Delete a single note

    `DELETE ~/api/notes/id`

Prerequisites
-------------

You must have both [Bower](https://bower.io) and [Node.js](https://nodejs.org) installed to run the installation packages. To check if you have them you can run the following in the terminal:


`node -v`

`bower -v`


Backend Setup
=============

A few things need to be done before the API will work properly.

### Node Modules Installation ###

In the Terminal, in the root of the application

```
npm install
mkdir config
touch config/db.js
```
### Connect to a mongoDB ###

Open `config/db.js` in your editor of choice and add the following:

```javascript
module.exports = {
    url : '<url to a mongoDB>'
}
```

A mongoDB can be set up locally, or one can be created remotely. [mLab](https://mlab.com) is one possibility for a remote mongoDB.

### Start the server ###

There are two ways to start the server. One method simply uses `npm` the other uses the `nodemon` module.

* `npm start`
  * used to simply start the server. Must be manually restarted upon any changes to the server files.
* `npm run dev`
  * Used mainly as a development tool. Restarts upon any changes to the server files.

Frontend Setup
==============

This deployment contains some basic set-up files for an Angular SPA

To install the Angular dependencies, in the root of the application

```
bower install
```

All needed files will land in public/libs. Navigate to localhost:8080 to view the app start up

#### Installed Components ####

* Angular.js
* Angular-ui-router.js
