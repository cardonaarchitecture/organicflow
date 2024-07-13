
# Stage 1: Install dependencies and build the app
FROM node:16-alpine AS build

# Set working directory
WORKDIR /app

# Set NODE_ENV with a default value
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Copy .env.local to the appropriate .env file based on NODE_ENV, or create an empty one if it doesn't exist
RUN if [ -f /app/.env.local ]; then \
        cp /app/.env.local /app/.env.${NODE_ENV}; \
    else \
        touch /app/.env.${NODE_ENV}; \
    fi

# Build the application
RUN yarn build

# Stage 2: Serve the built app with a lightweight web server
FROM node:16-alpine

# Set NODE_ENV with a default value
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app ./

# Install only production dependencies
RUN yarn install --frozen-lockfile --production

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD node -e "require('http').request({host: 'localhost', port: 3000, path: '/api/health', timeout: 5000}, (res) => { process.exit(res.statusCode !== 200) }).end()"

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
