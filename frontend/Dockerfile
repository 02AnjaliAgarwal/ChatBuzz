# Use the Node.js image for development
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the source code
COPY . ./

# Expose the port React's development server uses
EXPOSE 3000

# Start the React development server
CMD ["npm", "run", "start"]
