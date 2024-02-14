# Doctor Appointment Booking Application

This is a web application designed to facilitate booking appointments with doctors online. It provides a convenient platform for users to browse available doctors, schedule appointments, and manage their bookings.

## Frontend
The frontend of the application is built using React.js and handles the user interface and interactions.

### Technologies Used
- **React.js**: Frontend library for building user interfaces.
- **HTML, CSS, JavaScript**: Languages used for structuring, styling, and scripting the frontend.
- **React Router**: For routing within the React application.
- **Fetch**: For making HTTP requests to the backend server.

### Setup Instructions
1. Navigate to the `client` directory: 
cd client
2. Install dependencies:
npm install
3. Start the development server:
npm run dev
4. Open your web browser and navigate to `http://localhost:5173` to view the application.

## Backend
The backend of the application is built using Node.js, Express.js, and MongoDB. It handles data storage, business logic, and API endpoints.

### Technologies Used
- **Node.js**: JavaScript runtime environment for running server-side code.
- **Express.js**: Web application framework for Node.js used for building APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: MongoDB object modeling tool for Node.js.

### Setup Instructions
1. Navigate to the `server` directory:
   - cd server
2. Install dependencies:
   - npm install
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables:
     PORT=3001
     MONGODB_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     STRIPE_SECRET_KEY=<your-stripe-secret-key>
4. Start the server:
   - npm start



## Deployment
The frontend and backend can be deployed separately to their respective hosting platforms. Ensure that environment variables are properly configured in your deployment environment.

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors
- Imran Ahammed (https://github.com/imranahmmed)
