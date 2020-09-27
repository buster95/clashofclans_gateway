FROM node:14-alpine
LABEL maintainer="buster95"

WORKDIR /app
COPY . .
RUN yarn install

ENV PORT 80
EXPOSE 80
CMD ["npm", "start"]