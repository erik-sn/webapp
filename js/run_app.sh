#!/bin/sh

if [ ${DEBUG:="False"} = "False" ]
then
    npm run start
else
    npm run dev
fi