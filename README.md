# Web Application Boilerplate

Default web application boiler plate for (mostly) personal use.

### Technologies:

##### Front End
- React
- Redux
- TypeScript
- Isomorphic Rendering
- Node.js

##### Back End
- Django
- Django Rest Framework


### Intended Use:
The "app" and "api" are completely separate applications. "app" is a react/node.js front end application
that is served with an express.js node server. The "api" is a separate python server that provides
REST API endpoints for the react application to use.

This project is designed to be fairly basic. However it has the tools such as server side rendering, automated testing,
routing, data management, and error tracking that make it suitable for larger projects. It is extensible so libraries
can be added, but also taken away to simplify if necessary

The most practical way to run this application is have the django application run on one port, the node application on another,
and then configure reverse proxy through Nginx/Apache/IIS so `/api*` endpoints are pointed to the django application, and all
others to the node application.

Separate READMEs for more application specific information are in the respective folders.

### Requirements:
- Node >= v6
- Yarn (JavaScript package manager)
- Python >= 3.4


### Installation:
```bash
git clone https://github.com/erik-sn/webapp.git

cd webapp/api
pip install virtualenv
virtualenv venv
source venv/bin/activate
cd ../..
pip install -r requirements.txt


cd webapp/app
yarn install
```
