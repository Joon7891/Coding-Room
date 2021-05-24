# Ubuntu Image with Root Privilages
FROM ubuntu:18.04
USER root

# Setting up working directory and dependencies
WORKDIR /app
COPY ./src /app
COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json

# Installing basic tools
RUN apt-get update
RUN apt-get install vim -y
RUN apt-get install curl -y

# Installing Node and NPM
RUN curl -sL https://deb.nodesource.com/setup_15.x | bash
RUN apt-get install nodejs -y
RUN node -v
RUN npm install npm@latest -g
RUN npm -v

# Setting up PORT
ENV PORT=3001
EXPOSE 3001

# Starting server
RUN npm install

# Starting server
CMD ["npm", "start"]
