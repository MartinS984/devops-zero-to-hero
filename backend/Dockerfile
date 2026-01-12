# 1. Use an official lightweight Node.js image
FROM node:22-alpine

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy package.json and install dependencies FIRST
# (This leverages Docker layer caching to speed up builds)
COPY package.json package-lock.json* ./
RUN npm install --production

# 4. Copy the rest of the application code
COPY . .

# 5. Expose the port the app runs on
EXPOSE 5000

# 6. Define the command to start the app
CMD ["node", "index.js"]