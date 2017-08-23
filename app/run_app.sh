#!/bin/sh

if [ ${DEBUG:="False"} = "False" ]
then
    echo "Starting Production Server"
    npm run start
else
    echo "Starting Development Server"
    npm run dev
fi