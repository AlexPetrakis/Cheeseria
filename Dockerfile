FROM node:18-alpine as frontend
ENV CI=true
WORKDIR /frontend
COPY frontend/package*.json .
RUN npm install --production
COPY frontend .
RUN npm test
RUN npm run-script build


FROM node:18-alpine as backend
ENV CI=true
WORKDIR /backend
COPY backend/package*.json .
RUN npm ci --only=production
COPY backend .
COPY --from=frontend /frontend/build public
EXPOSE 4005
RUN npm test
CMD ["npm", "run", "start:nodemon"]
