# Use official Node.js image with version 20.11.1
FROM node:20.11.1

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port
EXPOSE 3001

# Command to run the frontend server
CMD ["npm", "run", "dev"]
