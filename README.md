# Apartment App API Documentation

## Introduction
simple listing apartments app that allow the user to see more details about each apartment.

## Technologies Used

- NodeJs
- Express.js
- Mongo Database
- React.js
- Next.js
- React Native

## Running Procedure
- Clone the project.
- Run MachineApplciation.java in vending-machine\src\main\java\com\vendor\machine\MachineApplication.java.
- Test the API with Swagger: [Swagger UI](http://localhost:8080/swagger-ui/index.html#/)


## Backend
- **get all apartments**: (http://localhost:3000/apartments).
- **get specific apartment details**: (http://localhost:3000/apartments/id).

## Frontend
- **Apartments List View**: View of all the apartments, could press into specific item to check its details.
- **Specifi Item View**: View the details of the apartment, and could press on Nawy real state to get back to List View.

## Mobile
- **Apartments List View**: View of all the apartments, could press into specific item to view pop up contains the details of the selected item.

## Databas Schema
### Apartment
- **title**: Name of the villa.
- **description**: brief about the features of the villa.
- **price**: Cost of each villa.
- **image**: Link for villas from various websites.
- **createdAt**: Date of creation.
- **updatedAt**: Date of update.



## Notes
- Database: is deployed into Mongo DB, allowing all the addresses to access it.
