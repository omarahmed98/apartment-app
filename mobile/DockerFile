# Use the official Node.js image with version 20.11.1
FROM node:20.11.1

# Set working directory
WORKDIR /app

# Install Expo CLI globally
RUN npm install -g expo-cli

# Expose port
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Command to start the React Native packager
CMD ["npm", "start"]
