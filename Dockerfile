# 1. Use Node.js 22 Alpine image
FROM node:22-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy only package files first
COPY package*.json ./

# 4. Install only production dependencies
RUN npm install --omit=dev

# 5. Copy the rest of the app
COPY . .

# 6. Expose the application port
EXPOSE 8989

# 7. Start the app
CMD ["node", "index.js"]
