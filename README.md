# Thoughts

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)](https://webpack.js.org/)
[![IndexedDB](https://img.shields.io/badge/IndexedDB-brightgreen?style=for-the-badge&logo=indexeddb&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
[![Workbox](https://img.shields.io/badge/Workbox-4FC08D?style=for-the-badge&logo=google&logoColor=white)](https://developers.google.com/web/tools/workbox)
[![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)](https://babeljs.io/)
[![PWA](https://img.shields.io/badge/PWA-0056B3?style=for-the-badge&logo=google-chrome&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

## Description

JATE is a simple text editor built using JavaScript. It allows users to create, edit, and save text content in a local IndexedDB database.

## Content ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg) 

- [Walkthrough](#Walkthrough)
- [Features](#Features)
- [Screenshots](#Screenshots)
- [Usage](#Usage)
- [Database](#Database)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Link of deployed application

- https://jate-7y73.onrender.com 

## Features

- Database Storage: JATE uses IndexedDB to store text content locally on the user's device.
- Create and Edit: Users can create new text entries and edit existing ones.
- Webpack Build: The app is bundled using Webpack for better code organization and performance.
- Progressive Web App (PWA): JATE is designed as a PWA, ensuring a seamless experience for users, even in offline mode.

## Screenshots of application

![Alt text](./screenshots/1.png "Welcome screen")

![Alt text](./screenshots/2.png "Installation")

![Alt text](./screenshots/3.png "IndexeDB")

![Alt text](./screenshots/4.png "Manifest")

## Usage

- Run the development server: npm run start
- Open the app in your browser: http://localhost:3000

## Database

JATE uses IndexedDB for local storage. The database is initialized and upgraded using the idb library. The putDb method adds content to the database, while the getDb method retrieves content.

## Contributing

Contributions are welcome!

## Questions
If you have any questions or issues, please feel free to reach out:
- GitHub: https://github.com/DamirFM

