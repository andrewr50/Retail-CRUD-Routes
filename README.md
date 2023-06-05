# Retail-CRUD-Routes

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

This a CRUD api for retail databases. This was built to provide basic back end functions to a web based merchant. While there are sure to be more specific routes that are needed this is a good skeleton to start with. I became more comfortable with express.js and sql routes as well as finding a routes layout I really like by using the try, catch blocks instead of .then.catch

## Installation

First we need to install our dependencies. We will start with node.js by entering `npm i` into the terminal. Once those are installed we need to setup mySQL. Type `mysql -u root -p` into the terminal and enter your password when prompted. While in the mysql shell make sure you are in the db file and enter `source schema.sql;`. After that exit sql and use `npm run seed` to seed the database. Finally start the server with `npm start`.

## Usage

There is no front end to this application. Use insomnia to test the routes.

## Credits

https://expressjs.com/en/4x/api.html

## License

MIT License