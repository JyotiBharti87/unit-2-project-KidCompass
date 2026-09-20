# KidCompass

## About KidCompass

KidCompass is a full-stack web application that is built to help parents/caregivers to find other families with same age children in their preferred location.
With the help of this App parents browse other profiles with the location and age of their children.
They can select kids profile and open the card to see what activities kid likes to do.
On the  card, parents can click on the "connect" button to send a request to the other parent to connect with them.

Users can create events.
After creating an event, users can view/edit/delete the event.

The application stores parent and event information in a MySQL database and uses a Spring Boot API to send data to the React frontend.

To Create this App I have used the following technologies:
- React.js and JavaScript for the frontend
- Java and Spring Boot for the backend
- MySQL for the database
- HTML/CSS for frontend design
- Git/GitHub for version control
- Postman for API testing

## Current Features

- Browse kid profiles
- Search by city or ZIP code
- Filter kids by age group
- View kid profile details
- View a Connect option on kid profiles
- Create events
- View events
- Edit events
- Delete events
- Store parent and event data in MySQL


## How to Run KidCompass

### Backend

1. Open the `kidcompass-backend` folder.
2. Make sure MySQL is running.
3. Make sure the `kidcompass` database is created.
4. Check the database username and password in `application.properties`.
5. Run the Spring Boot application.
6. The backend API will run on `http://localhost:8080`.

### Frontend

1. Open the `kidCompass-React-Frontend` folder.
2. Open the terminal.
3. Install the dependencies:

   npm install

4. Start the React application:

   npm run dev

5. Open the localhost URL shown in the terminal.


## Database

KidCompass uses MySQL to store the application data.

The application currently has two main models:

- Parent - stores parent and kid profile information.
- Event - stores event information.
- An Event is connected to the Parent who created the event.


## API Endpoints

The Spring Boot backend provides REST API endpoints for Parent and Event data.

### Parent API

- GET `/api/parents` - Get all parent profiles.
- GET `/api/parents/{id}` - Get one parent profile.
- POST `/api/parents` - Create a parent profile.
- DELETE `/api/parents/{id}` - Delete a parent profile.

### Event API

- GET `/api/events` - Get all events.
- GET `/api/events/{id}` - Get one event.
- POST `/api/events/parent/{parentId}` - Create an event for a parent.
- PUT `/api/events/{id}` - Update an event.
- DELETE `/api/events/{id}` - Delete an event.


## Testing

I tested the KidCompass application during development.

- Used Postman to test the backend API.
- Tested creating, viewing, editing, and deleting events.
- Tested searching kids by city and ZIP code.
- Tested filtering kids by age.
- Tested form validation.
- Tested that event data remains after refreshing the page.
- Added error handling when the backend API is not available.
- Fixed an issue where missing city or ZIP code data could cause the Browse Kids page to stop working.


## Future Improvements

Some features I would like to add in the future are:

- User authentication and secure login.
- Allow parents to join events.
- Allow parents to send and manage connection requests.
- Messaging between connected parents.
- More search and filtering options.
- Improve the user profile page.

## Wireframe

[KidCompass Wireframe](https://www.figma.com/design/f9Nmvls2UGsPHfvUs2HLW3/Kid-Compass?node-id=0-1&p=f&t=0bF1uVk5EqugpxMx-0)

## ER Diagram

[KidCompass ER Diagram](https://dbdiagram.io/d/6a837a8ae093539a9ed1ad2e)

## Project Structure

KidCompass contains two main application folders:

- `kidcompass-backend` - Java, Spring Boot, JPA, and MySQL backend.
- `kidCompass-React-Frontend` - React, JavaScript, HTML, and CSS frontend.


## Author

Jyoti Bharti

LaunchCode Unit 2 Project - KidCompass