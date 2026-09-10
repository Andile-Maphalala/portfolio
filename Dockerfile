# =========================================
# Stage 1: Build the Angular application
# =========================================
ARG NODE_VERSION=24.15.0-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm npm ci

RUN npm install -g @angular/cli

COPY . .
RUN npm run build -- --configuration=production

# =========================================
# Stage 2: Serve with Nginx
# =========================================
FROM nginx:alpine AS production

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the browser build from the portfolio subfolder
COPY --from=builder /app/dist/portfolio/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]