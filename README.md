# CSE210 - San Diego Housing Safari

## Front-end: React

* Direct to `frontend` directory and then run `npm start`

### For integration of frontend and backend: 

updated frontend/package.json - add "proxy": "http://localhost:8000"

updated housing/housing/settings.py - add config for frontend 

First in /frontend folder, run `npm run build` to create static files, and then start the server by running `python manage.py runserver` , then can see the rendered js pages. 



## Back-end: Django
* the project dir: housing. 
* to add new features, run `django-admin startapp <appname>`. 
* run `python manage.py runserver` in the housing dir, and then visit http://127.0.0.1:8000/log-in, http://127.0.0.1:8000/signup to see the current pages. 