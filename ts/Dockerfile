
FROM kkarczmarczyk/node-yarn

# Install dependencies
RUN yarn
RUN yarn add --dev typescript
RUN npm rebuild node-sass

# Build the app
RUN npm run production

# Expose the app port
EXPOSE 4000