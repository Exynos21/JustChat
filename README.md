# JustChat

A messaging service app that provides users with a real-time chat experience. Users can sign up or sign in using their email and password. The app features a clean and intuitive UI, allowing for seamless communication between users.

## System Design Document
[View Document](https://docs.google.com/document/d/10YoI5fRNB7dI55H-4o5YCKDsuYd25mPj60k_Uf8yWog/edit?usp=sharing)

## Author Info
- **Author**: Tanay
- **University**: Indian Institute of Technology (IIT), Patna
- **Department**: Artificial Intelligence and Data Science
- **Roll No**: 2201AI39
- **Institute Mail-ID**: 2201ai39_tanay@iitp.ac.in
- **Personal Mail-ID**: tanaychhajed@gmail.com

## Steps to Run the App

### Clone the Repository
Download the repository as a zip file and extract it, or open your terminal and type:

```bash
git clone https://github.com/Exynos21/JustChat
```
### Setup Database
1. Use MongoDB Compass to create a new database named `JustChat`.
2. Create collections for **Users**, **Messages**, and **Groups** as described in the system design document.

### Set up Environment Variables
1. Navigate to the backend directory.
2. Edit the `.env` file and add your MongoDB connection string:
    ```makefile
    PORT="specify the port ex: 8747"
    JWT_KEY="enter any random string ex:(*&)&(&TYO*&T&GHOU(&FVHIUTR^&*(*&^())))"
    ORIGIN="http://localhost:5173"
    DATABASE_URL="mongodb://localhost:27017/JustChat"
    ```

### Install Node Modules

To start, open your terminal and navigate to the root folder of the project. Once there, run the following command separately in both the server and client directories to set up the environment:
```bash
npm install
```
This will install all the required dependencies.
## Start the App

In the terminal,cd to server directory & run the following command for the backend:

```bash
npm run dev
```
This runs the backend server.

Then, in a new terminal window, navigate to the client directory and run:
```bash
npm run dev
```
This runs the app in development mode. Open http://localhost:5173 to view it in your browser.

## Features of the App
- Simple, easy-to-use UI.
- Hassle-free authentication using email and password.
- Users can upload a profile picture & change color scheme.
- Real-time text messaging with other users.
- Search functionality to find other users.
- Send and receive images and files.
- Group chat functionality.
- Option to attach files of any format.
- Update profile feature.
- Message deletion and forwarding.

## TODO

- Implement voice and video call functionality.
- Integrate AI chatbot for enhanced user interaction.
- Add availability status feature for users.
- Implement privacy features for improved data security.
- Create user activity logs for better monitoring.


## Technologies Used

- React for the frontend.
- Node.js and Express for the backend.
- MongoDB for database handling.
- Mongoose for object modeling in MongoDB.
- Socket.io for real-time messaging.
- Bcrypt for password hashing.
- Jsonwebtoken for authentication.
- Multer for file uploads.
- Axios for HTTP requests.
- Radix UI for accessible UI components.
- Tailwind CSS for styling.
- Sass for enhanced CSS management.
- Zustand for state management.
- React Router for navigation.
- Nodemon for automatic server restarts during development.
- ESLint for code quality and consistency.
- Prettier for code formatting.


