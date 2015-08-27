# My Node App

Simple NodeJs Application

- **controllers/** – defines your app routes and their logic
- **utils/** – code and functionality to be shared by different parts of the project
- **middlewares/** – Express middlewares which process the incoming requests before handling them down to the routes
- **models/** – represents data, implements business logic and handles storage
- **public/** – contains all static files like images, styles and javascript
- **views/** – provides templates which are rendered and served by your routes
- **app.js** – initializes the app and glues everything together
- **package.json** – remembers all packages that your app depends on and their versions

### Installation

You need supervisor and grunt  installed globally:

```sh
$ npm install -g supervisor
$ npm install -g grunt-cli
```

```sh
$ git clone [git-repo-url] SimpleNodeApp
$ cd SimpleNodeApp
$ npm install
$ grunt build
$ npm start
```




`
