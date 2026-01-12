# --- Stage 1: Build the React App ---
FROM node:22-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Serve with Nginx ---
FROM nginx:alpine
# Copy the "dist" folder from the builder stage to Nginx's public folder
COPY --from=builder /app/dist /usr/share/nginx/html
# Expose port 80 (Standard Web Port)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]