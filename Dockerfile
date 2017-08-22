FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /project
WORKDIR /project
RUN apt-get update
RUN apt-get install -y pkg-config libfreetype6-dev libpng12-dev
ADD . /project/
RUN pip install -r requirements.txt