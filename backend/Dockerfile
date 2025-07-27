# Stage 1: Development (cài dependencies)
FROM node:20-alpine AS development
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
USER node

# Stage 2: Build (build app cho production)
FROM node:20-alpine AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
COPY --from=development /usr/src/app/node_modules ./node_modules
COPY . .
RUN yarn build
ENV NODE_ENV production
RUN yarn install --production --frozen-lockfile && yarn cache clean
USER node

# Stage 3: Production (image cuối cùng chỉ chứa files cần thiết)
FROM node:20-alpine AS production
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
EXPOSE ${SERVER_PORT:-9703}
CMD ["node", "dist/main.js"]