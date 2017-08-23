#!/bin/sh

python manage.py migrate
if [ ${DEBUG:="False"} = "False" ]
then
    echo "Starting Production Server"
    #python manage.py collectstatic
    gunicorn --workers=3 --timeout=120 -k gevent --log-level=DEBUG config.wsgi -b 0.0.0.0:8000
else
    echo "Starting Development Server"
    python manage.py runserver 0.0.0.0:8000
fi