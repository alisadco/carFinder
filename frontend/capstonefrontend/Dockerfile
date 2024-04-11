# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire React app to the working directory
COPY .. .

# Build the React app
RUN npm run build

# Expose the port on which the React app will run (default is 3000)
EXPOSE 3000

# Set the command to run the React app
CMD ["npm", "start"]