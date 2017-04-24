# Webapp Boilerplate - Django Rest Framework + React

This repository is a starting template for a django & react application. It
combines libraries and configuration I am comfortable with for quick bootstrapping
of new ideas, prototypes, and applications.

### Configuration
This application makes use of environment variables in a `.env` file in the
root directory

Then environment file should have the following keys:
```bash
# application settings
SERVER=**server type** # either NODE or DJANGO - see note (1)

# django settings
SECRET_KEY=**Django Secret Key**
DEBUG=True
DATABASE_URL=**optional url** # database url location - see note (2)

```

###### Notes
    1. this value must either be 'NODE' or 'DJANGO'.

        If 'NODE' then the
        build process of the front end applications places the JS/CSS bundles
        in the front end `/dist` folder. This is designed to be the case when
        the express.js `server.production` file is used to serve the application
        (which can consume the django rest API).

        If 'DJANGO then the front end build process place their JS/CSS in the
        django static directory. This is designed to the the case when the
        django server is run by itself. This will also direct all non-matching urls
        to the base `index.html` file.

    2. If no database url is specified the local sqllite3 file in the root
    directory is used by django. For valid urls see the [django-database-url](https://github.com/kennethreitz/dj-database-url) documentation.

### Running Server

There are two choices for running the application. The first is running it as
just a Django application (`SERVER=DJANGO` in the .env file). Front-end bundles
are built and output into the django static files, and urls are redirected
to the base `index.html` which serves the React application.

The second is hosting both the Django server & the express.js production server.
This allows for server side rendering in JavaScript. An example deployment
is running the Django server on port 8000, the express.js on port 4000, and
using nginx to reverse proxy to them.


### Application Details

##### Back End

On the server django & django rest framework are used to provide html
templates and REST APIs.

Features enabled by default:

    - [DRF browseable API](http://www.django-rest-framework.org/topics/browsable-api/)
    - [django debug toolbar](https://github.com/jazzband/django-debug-toolbar)

##### Front End

This application contains two versions of the same React application: one in JavaScript and the other in TypeScript. Unless specified
below these applications should behave in the exact same way (including npm scripts). More detailed information on the repositories
can be found in readmes inside their respective directories.

Application differences:

    - JS uses [Jest](https://facebook.github.io/jest/) for testing and coverage, TS uses mocha/istanbul
    - TS uses Eslint, TS uses TSlint
