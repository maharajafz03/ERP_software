# Specify the base image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the application
RUN npm run build

# Use a lightweight web server to serve the app

# Expose the port the app runs on
EXPOSE 80

# Start the web server
CMD ["npm run dev"]
