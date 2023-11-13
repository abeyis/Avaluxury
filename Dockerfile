# Use an existing base image with Node.js and dependencies
FROM cypress/included:8.5.0

# Set the working directory inside the container
WORKDIR /e2e

# Copy the package.json and package-lock.json files to the container
COPY package.json .
COPY package-lock.json .

# Install project dependencies
RUN npm ci

# Copy the entire project directory to the container
COPY . .

# Set the Cypress base URL environment variable
ENV CYPRESS_baseUrl=http://54.80.124.225:8080/

# Run Cypress tests
CMD ["cypress", "run", "ci"]
