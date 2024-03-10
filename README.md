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
- Currently I fixed the problem of Docker file naming, so could start the application with docker-compose up.

## Another Running Procedure
- Clone the project.
- Install dependencies.
- **Backend Host in Mobile application**: I'm using my local device ip address, to call endpoint from backend so make sure changing it.
- you could run the application by:
    - into backend npm run dev
    - into frontend npm run dev
    - into mobile npx react-native start



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
