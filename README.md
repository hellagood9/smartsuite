This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Starbucks wannabe

by Maximiliano A. Sussini

## Stack

  - React: JS Library
  - React Hooks APIs
  - Redux: State (data) managment
  - React-router-dom: Routing
  - Sass: Styling
  - CSS Modules
  - ESLint, Prettier, Stylelint: Quality code
  - NodeJS
  - Express
  - MongoDB
  
### Installation

Requires [Node.js](https://nodejs.org/) v11+ to run.

Install the dependencies and and start the server and react-app concurrently.

CLIENT PORT: 3000
SERVER PORT: 5000

### Clone repo

```sh
$ git clone https://github.com/hellagood9/smartsuite.git
```

### Server

```sh
$ cd server
$ yarn
$ mv .env.example .env
$ yarn run dev
```

### Client

```sh
$ cd client
$ yarn
$ mv .env.example .env
$ yarn start
```

### DB: Make sure you are running mongo

```sh
$ mongo
```

(Rename environment (/client and /server root) from ".env.example" to ".env")

### URL

http://localhost:3000

### Credentials to Login

/signin

| Field    | Value |
| ------   | ------ |
| username | jane@doe.com
| password | 12345

### Routes

Instructions on how to use them in your own application are linked below.

| Route          | Info    |
| -------------- | ------- |
| /              | Homepage and product list
| /products/:id  | Product details 
| /cart          | Shopping cart
| /signin        | Signin page
| /signup        | Signup page 


### Scripts (ESLint, Prettier, StyleLint)

```sh
$ yarn run lint:js
$ yarn run lint:js:fix
$ yarn run lint:scss
$ yarn run lint:scss:fix
$ yarn run prettier:check
$ yarn run prettier:write
```

### Dependencies

### /client

- axios
- classnames
- js-cookie
- node-sass
- prop-types
- react-icons
- react-redux
- react-router-dom
- redux
- redux-thunk
- reselect
- eslint
- prettier
- stylelint

### /server

- cors
- dotenv
- express
- jsonwebtoken
- mongoose
- morgan
- nodemon

### Todo

- Improve the design/layout
- Toast or similiar to provide a better feedback to the user
- Testings
- CI for PRs
- Rollbar (or similar)
- Implement Redux Sagas
- Form validation

### Considerations
- This is a first approach in order to learn / practice
- Lack of functionalities as it is not a finished product (they will probably be added little by little)
- Due to time constraints, no attention has been paid to details such as password hashing, data entry validations or server-side error handling

License
----

MIT

:muscle:
**Free Software, Hell Yeah!**