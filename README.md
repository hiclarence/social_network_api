# social_network_api

## Description

This application leverages Monogo DB through an MVC framework to create a social network API. Through the REST API, we will be able to view, edit, add, and delete specific users. Similar CRUD functionalities can be found for the thoughts model.  Users can share their thoughts, react to friends’ thoughts, and create a friend list. 

## Table of Contents

- [Installation](#installation)
- [Link](#Link)
- [Technologies](#technologies)
- [License](#license)

## Installation

Running `npm install` to install dev dependencies, followed by a `node index.js` will run the application.

## Link

You can view the full video here: 

## Technologies

- Mongo DB Compass
- Mongo DB
- Mongoose
- Node JS
- Express JS
- Vanilla JS

## License

This project is covered by an MIT License

//DONE
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database

//done
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

//done
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

//halfway there: friends remaining
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list