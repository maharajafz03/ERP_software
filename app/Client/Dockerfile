# Use a newer Node.js version to avoid engine compatibility issues
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better cache management
COPY package*.json ./

# Install dependencies, and set a longer timeout for network issues
RUN npm install --fetch-timeout=120000

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port on which your app will run
EXPOSE 3000

# Run the app in production mode
CMD ["npm", "start"]
