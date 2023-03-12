FROM node:18-buster AS build

COPY tsconfig.json ./
COPY package.json ./
RUN npm install
COPY src src
RUN npm run build
RUN rm -rf node_modules
RUN npm install --only-prod

# Runtime image
FROM node:18-alpine

COPY --from=build node_modules node_modules

COPY --from=build dist dist
COPY --from=build package.json package.json

EXPOSE 3001
CMD npm start
