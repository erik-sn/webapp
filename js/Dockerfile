FROM node:6.10.0

# Prepare app directory
RUN mkdir -p /app
WORKDIR /app
ADD . /app

# Install dependencies
RUN yarn
RUN yarn add --dev typescript
RUN npm rebuild node-sass

# Build the app
RUN npm run production

# Expose the app port
EXPOSE 4000