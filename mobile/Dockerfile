# Use official Node.js image as the base image
FROM node:20.11.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install -g react-native-cli
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the default port used by React Native development server
EXPOSE 8081

# Command to start the React Native development server
CMD ["npx", "react-native", "start"]
