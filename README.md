# Assignment 2 - Web API.

Name: Jie Shi

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 - 3 new API endpoint 
 + Feature 2 - Error handling
 + Feature 3 = Mongo integration
 + Feature 4 - Basic Authentication
 + Feature 5 - Link some API endponit in this assignment with assignment1
 + Feature 6 - GET and POST data to API
 + Feature 7 - Object referencing in Mongo/Mongoose
 + Feature 8 - Add API Documentations with Swagger

## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/jieshi14906/assignment2
```

followed by installation

```bat
npm i
npm start -- start for the app with port 8080
npm run start:swagger -- start for the app with port 8080 with swagger(/api-docs)

```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=
mongoDB=CloudMongoURL
seedDb=true
secret=JWT TOKEN SALT
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie of the specific id | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| /api/users | Get a list of users | N/A | N/A | N/A
| /api/genres | Get a list of generes | N/A | N/A | N/A
| /api/users/{userName}/favourites | Get a list of the favourite movies of users | N/A | N/A | N/A
| /api/users/{id} | N/A | N/A | Update user by id | N/A
| /api/users/{userName}/favourites | N/A | Add a movie to favourite list | N/A | N/A
| /api/users/action | N/A | Post user data | N/A | N/A

![][swagger]
If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https:https://moviesapistaging.herokuapp.com/)).(swagger ui page)


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.
protect routes:
+/api/users/:username/favourites POST
+/api/users/:username/favourites GET

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export async function loadUsers() {
  console.log('load user Data');
    try {
      await userModel.deleteMany();
      await users.forEach(user => userModel.create(user));
      console.info(`${users.length} users were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load user Data: ${err}`);
    }
  }
  export async function loadMovies() {
    console.log('load seed data');
    console.log(movies.length);
    try {
      await movieModel.deleteMany();
      await movieModel.collection.insertMany(movies);
      console.info(`${movies.length} Movies were successfully stored.`);
    } catch (err) {
      console.error(`failed to Load movie Data: ${err}`);
    }
  }

~~~

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

+ swagger ui page
 In heroku, I build the swagger documentation. Every route can be visited because the authorization and implement the swagger.
# Assignment 2 - Agile Software Practice.

Name: Jie Shi

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get/api/movies - get movies lists.
+ Get/api/movies/{movieid} - returns the movie id on a specific movie.
+ Put/api/users/{id} - update user by id
+ Post/api/users/{userName}/favourites- post a movie to favourite list
+ Post/api/users/action - post user data
+ Get/api/users/{userName}/favourites - return user favpurites movies.  
+ Get/api/users - returns an array of user objects.
+ Get/api/genres - returns the generes list
## Error/Exception Testing.

.... From the list of endpoints above, specify those that have error/exceptional test cases in your test code, the relevant test file and the nature of the test case(s), e.g.

+ Post /api/movies - test when the new movie has no title, invalid release date, empty genre list. Test adding a movie without prior authentication. See tests/functional/api/movies/index.js 
+ Get /api/movies - test  movies list whether the token is valid and invalid
+ Get /api/movies/:id - test a specific movie whether the id is valid and invalid.
+ Get /api/users - test users list
+ Get /api/users/{userName}/favourites- test to get users favourites list with vaild username
+ Get /api/genres - test generes list
+ Post /api/users/{userName}/favourites- test to post a movie to favourites with vaild movie id
+ Post /api/users/action - test to post user data
+ Put /api/users/{id} - test to update user data by valid user id


## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://dashboard.heroku.com/apps/moviesapistaging - Staging deployment

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 

![][production]

[If an alternative platform to Heroku was used then show the relevant page from that platform's UI.]

## Feature Flags (If relevant)

... Specify the feature(s) in your web API that is/are controlled by a feature flag(s). Mention the source code files that contain the Optimizerly code that implement the flags. Show screenshots (with appropriate captions) from your Optimizely account that prove you successfully configured the flags.


[stagingapp]: ./img/stagingapp.png
[production]: ./img/production.png
[swagger]: ./img/swagger.png