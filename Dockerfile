FROM node:16

WORKDIR /home
RUN chown -R node:node /home

COPY --chown=node:node . .
COPY /app .
USER node
EXPOSE 8000 8080