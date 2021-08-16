# Proper Coding Challenge

## Description

This project was built for a coding challenge. The client is a CRA React + Typescript application. The server was built using Node js and Express. This project uses Styled Components for the styling.

## Folder structure

    root
      └── src
      ├── api
      │    ├── controllers
      │    ├── routes
      │    └── index.js
      ├── db
      ├── integration
      ├── middlewares
      ├── models
      ├── services
      └── utils
      │
      ├── client
      │   ├── public
      │   │     └── locales
      │   │           ├── en
      │   │           └── es
      │   │
      │   └── src
      │       ├── __mocks__
      │       ├── assets
      │       ├── components
      │       ├── constants
      │       ├── containers
      │       ├── pages
      │       ├── theme
      │       ├── translations
      │       ├── types
      │       ├── utils
      │       └── index.tsx
      │
      └── README.md

## Stack

### Server

    - Node JS
    - Express

### Frontend

    - React
    - Typescript
    - Styled Components
    - Jest + React testing library

## How to start

### Clone

You can clone the repo using this url: https://github.com/Safro94/proper-challenge

```
git clone https://github.com/Safro94/proper-challenge.git
```

### Install dependencies

Make sure you are using the correct Node version(v12).

Install dependencies

```
cd proper-challenge
```

Run

```
npm install
```

Add .env file with this keys

```
PORT=9000
CLIENT_URL=http://localhost:3000
```

Go to the client folder

```
cd proper-challenge/client
```

Run

```
npm install
```

Add .env file with this keys

```
SKIP_PREFLIGHT_CHECK=true
REACT_APP_SERVER_URL=http://localhost:9000
REACT_APP_GOOGLE_API_KEY={your_api_key}
REACT_APP_DAWA_API_ENDPOINT=https://api.dataforsyningen.dk/autocomplete?q=
```

To run both projects at the same time, go to the root folder and run

```
npm run dev
```

the server should be running on http://localhost:9000 and the client http://localhost:3000

## Test

The frontend uses Jest + React testing library. The server uses Jest. You can run this command on each project

```
npm test
```

to run the tests.

## Technical decisions

See this [file](https://github.com/Safro94/proper-challenge/blob/master/decisions.md).

## Production

Click this [link](https://ms-proper-challenge.herokuapp.com/) in order to go to the production version.
