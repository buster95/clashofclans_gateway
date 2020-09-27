FROM node:14-alpine
LABEL maintainer="buster95"

ENV PORT 80

WORKDIR /app
COPY . .
RUN yarn install

EXPOSE 80
CMD ["npm", "start"]