# Stage 1: Install dependencies and build the app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application files
COPY . .

# Build the application
RUN yarn build

# Stage 2: Serve the built app with a lightweight web server
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
