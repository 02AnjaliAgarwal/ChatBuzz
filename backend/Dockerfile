# Use Node.js image to build the backend
FROM node:18

# Set working directory
WORKDIR /app/backend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the backend code
COPY . ./

# Expose backend port
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]
