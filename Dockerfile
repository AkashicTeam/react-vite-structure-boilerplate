FROM node:19.9.0
# Set the working directory
WORKDIR /app
# Copy app dependencies to container
COPY . .
# Install dependencies
RUN npm install
# Deploy app for local development
CMD npm run dev

EXPOSE 3000