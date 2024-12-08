
# Use Node.js image for the build step
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --production

# Copy the rest of the application code and build the React app
COPY . ./
RUN npm run build

# Use Nginx to serve the built files
FROM nginx:alpine

# Copy the built React app to the Nginx HTML directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx will listen on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]






# Use the Node.js image for development
# FROM node:18

# # Set the working directory
# WORKDIR /app

# # Copy package.json and install dependencies
# COPY package.json ./
# RUN npm install

# # Copy the source code
# COPY . ./

# # Expose the port React's development server uses
# #EXPOSE 2000

# # Start the React development server
# CMD ["npm", "run", "dev"]



