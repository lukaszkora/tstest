# Select system image
FROM node:8.11.3

# Set label
LABEL Description="'tstest' app test docker setup"

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# COPY package.json /usr/src/app/
# RUN npm install

# Bundle app source
# COPY . /usr/src/app

# Boundle source code
COPY . .

RUN npm install -g typescript && \
    npm install -g webpack && \
    npm install -g webpack-cli && \
    npm install -g webpack-node-externals && \
    npm install -g babel-core && \
    npm install -g babel-loader && \
    npm install -g babel-preset-env && \
    rm -rf package-lock.json node_modules && \
    npm install

# Expose port
EXPOSE 3000

# Run app
CMD ["npm", "run", "docker-start"]