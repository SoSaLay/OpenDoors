# [__Open Doors__](https://open-doors-frontend.vercel.app)

**Open Doors** is a web-based platform designed to help high school students explore various career pathways tailored to their interests, learning styles, and educational goals. By providing personalized career guidance and educational resources, Open Doors empowers students to make informed decisions about their future.

## Features

- Personalized career pathway suggestions based on user input (high school year, learning style, career aspirations, and institution preferences).
- Dynamic job types and career steps for different educational pathways.
- Access to resources like scholarships, grants, and educational tools.
- Integration with backend services for generating career pathways and saving user data.

## Technology Stack

**Open Doors** leverages the following technologies:

- **Frontend**: React.js, CSS
- **Backend**: Node.js, Express.js, MySQL
- **Deployment**: Vercel
- **CORS**: Configured for secure communication between frontend and backend

## __Installation__

*To set up the project locally, follow these steps through your terminal*:

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- MySQL (or an equivalent database system)
- Git

### Step 1: Clone the Repository

First, clone the **Open Doors** repository to your local machine:

```sh
git clone https://github.com/your-username/open-doors.git
cd open-doors
```
### Step 2: Install Dependencies

Once inside the project directory, install the required dependencies for both the frontend and backend:

#### Install Backend Dependencies


```sh
cd backend
npm install 
```

#### Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### Step 3: Configure Environment Variables
Create a .env file in the backend directory and add the following variables to configure your database and other settings:

```sh
DB_HOST=your-database-host
DB_USER=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
PORT=3030
```
Make sure your MySQL database is running and the credentials match your local or remote database setup.

### Step 4: Start the Development Servers
Start Backend Server
In the backend directory, run the following command to start the backend server:

``` sh
node server.js
```
Start Frontend Server
In the frontend directory, run the following command to start the React development server:

```sh
npm start
```
#### Step 5: Access the Website
Once both servers are running, you can access the Open Doors website at:

```sh
http://localhost:3000
````
### Deployment Guide
To deploy the project, you can use Vercel or another hosting platform. Ensure that your environment variables are correctly set on the hosting platform, and follow the instructions for deploying Node.js and React.js applications.

License
© 2024 Open Doors. All rights reserved.



