# socialNetwork-API-18
This is an API for a social network that incorporates MongoDB as a NoSql database due to its inherent ability to work with unstructured data.


![License Type](https://shields.io/badge/license-MIT-blue)
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Screenshots-Videos](#screenshots-videos)
* [Video-Demo](#Video-Demo)


## Description
This app was created as an example of using MongoDB with Mongoose to create a backend API for a basic social media website.
The endpoints can be tested using Insomnia and basic CRUD functions once the connections is running.  Timestamps are automactially
created and included in all operations.  Moment.js was used for the formatting.  Id's are also automatically created to manipulate specific data sets.

## Screenshots-Videos

ScreenShots Below

![Application Demo Screenshot1](https://github.com/Stickkman/socialNetwork-API-18/blob/main/assets/screenshots/screenshot01.jpg?raw=true)

## Installation
For local connection:
1. Use 'npm install' from your preferred CLI to install dependencies. 
2. Mongo version 6.9.2 is needed for this and included in the package.json, DO NOT use a newer version!
3. Open up the CLI and type 'node server.js' to sync the database/models and start.

## Usage
Once the connection is running, open up Insomnia and start testing your routes. 
The app allows the following for both USERS and THOUGHTS:
1. POST: For creating Users/Thoughts (as many as you want)
2. GETS: For finding Users/Thoughts by ALL or ID 
3. PUTS: For Updating Users/Thoughts by ID
4. DELS: For Deleting Users/Thoughts By ID

You can also POST and DELETE both Friends and Reactions to the Users/Thoughts.


## License
This license is covered under the MIT
for more information visit https://mit-license.org/

## Contributing
If you would like to contribute please send me an email.

## Tests
Insomnia for Endpoints

## Questions
Any questions regarding this repo can be sent to me directly at Stickkman@gmail.com

Github Username: Stickkman

Github Profile Link: (https://github.com/Stickkman)

## Video Demo

https://drive.google.com/file/d/1goisYz5FJi0ckV6jwsPE9k2aV8egZvvo/view





