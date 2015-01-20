##[keydash.herokuapp.com](http://keydash.herokuapp.com/)

Key Dash is an application that allows programmers to practice and improve their typing speed.  It is a more built out version of an MVP project I made called [Typr]().  The code style is inspired by John Papa's [AngularJS Style Guide](https://github.com/johnpapa/angularjs-styleguide)

### Front-end:
* Angular
* Jade Partials
* Stylus
* Chart.js
* Gulp tasks for js/css builds

### Back-end:
* Express
* MongoDB
* Bluebird
* Passport
* Jade templating



## Exercises

Exercises for this application are contained in ```exercise_files```, When the app server is started, ```createDefaultExercises()``` is called and if the exercises collection is empty, the database will be seeded with the contents of the respective directory.

* Currently this application supports exercises in either ruby, javascript, or python.  File extensions will become the language property.

  ```
  .js --> "JavaScript"
  .py --> "Python"
  .rb --> "Ruby"
  ```

* Filenames are expected to be in ```spinal-case```, the filename will be split into words at each dash, and each word will be capitalized to form a title.

  ```
  exercise-title --> "Exercise Title"
  ```

* File contents are stored under the ```contents``` property

#### Example:

  Filename: ```key-dash-exercise.py```

  Contents:
  ```
  print "Hello World"
  ```

  After seeding the database, this file would be stored in a mongo document like so:

  ```
  {
    fileName: 'Key Dash Exercise',
    language: 'Python',
    contents: 'print "Hello World"'
  }
  ```

## Users

  User Authentication/Authorization is implemented using a Passport local strategy.  Authenticated users have the ability to recored their exercise scores.

  An authenticated users will see a dashboard view on the index route, displaying a line graph of their progress thus far.
