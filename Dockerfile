# Build stage
FROM node:20-alpine as build
WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./
RUN npm ci

# Copy necessary files for build
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY src/ ./src/
COPY public/ ./public/ 
COPY index.html ./

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine
# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html
# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add healthcheck
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget --quiet --tries=1 --spider http://localhost:80 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]