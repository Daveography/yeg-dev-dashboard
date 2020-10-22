FROM node:12-alpine as builder
WORKDIR /app
ENV PATH /node_modules/.bin:$PATH
RUN npm install -g @angular/cli@8.3.26
COPY package.json .
RUN npm install
COPY . .
CMD npm run build

FROM nginx
COPY --from=builder /app/dist/yeg-dev-dashboard /usr/share/nginx/html
