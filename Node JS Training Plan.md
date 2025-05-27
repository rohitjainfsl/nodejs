# Node JS Training Plan

## Day 1: Introduction to Backend Development & Node.js
**Objective:** Understand what backend development is, why Node.js, and how it works.
- What is backend development?
- What is Node.js and why use it for backend?
- Node.js architecture (event loop, single-threaded model)
- Blocking vs Non-blocking I/O
- Installing Node.js + npm
- Writing your first Node.js script (`hello.js`)
- `console.log`, REPL, and executing Node files via CLI
- Intro to `package.json` and `npm init`
- **Practical:** Build a CLI calculator (Add, Subtract)

🛠️ **Homework:** Create a CLI script to accept user name and greet them using `readline` module.

---

## Day 2: Core Modules & File System Operations
**Objective:** Learn and practice key built-in Node.js modules.
- Common core modules: `fs`, `path`, `os`, `http`, `url`
- Synchronous vs Asynchronous file operations (`fs.readFile`, `fs.writeFile`)
- Creating and reading JSON data from files
- Using `path.join`, `__dirname`, `__filename`
- Folder and file manipulation
- Intro to modularization: Exporting functions

🛠️ **Mini Project:** Create a simple notes app that stores notes in a file (add, list, delete notes using `fs`)

---

## Day 3: Events, Streams, and Buffers
**Objective:** Understand Node’s event-driven architecture and I/O handling.
- `EventEmitter` class – creating & handling custom events
- Streams: readable, writable, duplex
- Stream data from a large file
- Buffer basics and usage
- Piping data between streams

🛠️ **Demo:** Copy a large file using streams and display progress in CLI.

---

## Day 4: Setting Up HTTP Server
**Objective:** Build a basic HTTP server without any framework.
- `http.createServer()` and its anatomy
- Routing using `req.url` and `req.method`
- Sending responses and setting headers
- Serving HTML or JSON responses
- Intro to REST principles

🛠️ **Activity:** Create a basic server that serves different responses based on route: `/`, `/about`, `/api/users`

---

## Day 5: Express.js Basics & Routing
**Objective:** Use Express to simplify server creation and routing.
- Installing Express
- Creating a server with Express
- Handling different types of routes: GET, POST
- Route parameters and query strings
- Organizing routes (basic modular routing)

🛠️ **Project Start:** Build a simple "Users API" with routes:
- `GET /users`
- `GET /users/:id`
- `POST /users`

---

## Day 6: Express Middlewares & Static Files
**Objective:** Learn middleware lifecycle and implement custom/global middlewares.
- What is middleware?
- Built-in, third-party, and custom middlewares
- Logging middleware
- Serving static files using `express.static()`
- Error-handling middleware

🛠️ **Activity:** Add a logger middleware to the Users API and serve a static HTML homepage from `public/`

---

## Day 7: Working with Request Body & Validation
**Objective:** Handle form/JSON data and validate input.
- Using `express.json()` and `express.urlencoded()`
- Handling form and JSON submissions
- Input validation using middleware or libraries (e.g. `express-validator`)
- Returning proper HTTP status codes

🛠️ **Enhance Project:** Add POST validation to `/users` route.

---

## Day 8: REST API CRUD with In-Memory Data
**Objective:** Build a full CRUD API (in-memory for now).
- Review HTTP methods: GET, POST, PUT, DELETE
- Update and Delete endpoints for users
- Managing state in memory (mock database)
- REST best practices

🛠️ **Final Project Part 1:** Complete CRUD API for Users with proper routes, validations, and middleware.

---

## Day 9: Modularizing Code & Error Handling
**Objective:** Structure a Node app properly and handle errors.
- Project folder structure (routes, controllers, utils)
- Separating route logic into controllers
- Handling and formatting errors
- 404 and generic error middleware

🛠️ **Refactor:** Move routes and logic to separate files. Add 404 and error handlers.

---

## Day 10: Connect React Frontend with Node Backend
**Objective:** Connect the existing React app with Node API.
- CORS and security considerations
- Testing APIs with Postman and then frontend
- Fetching data from backend (via Axios/fetch)
- Sending forms from React to Node backend
- Environment variables and deployment basics

🛠️ **Integrate:** Use Axios in a simple React component to fetch/add users from your Node API.
