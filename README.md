
# EchoExpress

# Project Overview

EchoExpress is a web platform designed for users to create, edit, and share blog posts. It provides functionalities such as user authentication, profile management, and image uploading..


## Features

- User Authentication: Register, login, and logout securely.
- Blog Posting: Create, edit, and publish blog posts with optional images.
- Profile Management: Update profile information and change profile photo.

## Technical Requirements
- Frontend: React.js with Redux for state management,  styled-components for styling.
- Backend: Node.js with Express.js, JWT for authentication.
- Database: MongoDB with Mongoose for ODM.
- Deployment: Render (backend), Vercel (frontend)


## Installation

Install my-project with npm

  ```bash
    git clone https://github.com/aikshit123/EchoExpress.git
    cd EchoExpress
  ```

## Install dependencies
  ```bash
    npm Install
  ```

## Set up environment variables:

  - Create a .env file in the root directory.
  - Define the following environment variables:
    ```makefile
      MONGODB_URI = <your_mongodb_uri>
      JWT_SECRET = <your_jwt_secret>
    ```

## usage

- Start the backend server
    ```arduino
      npm run start : server
    ```
- Start the frontend development server:
    ```arduino
      npm run start : client
    ```
- Access the application in your web browser at http://localhost:3000.

## Deployment link
  https://echo-express.vercel.app/

