FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build --max-old-space-size=4096

FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html