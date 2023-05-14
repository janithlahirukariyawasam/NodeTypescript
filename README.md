<!--# Backend of the ScholarX project

This is a boilerplate project for creating a Node.js Express backend using TypeScript.

## Prerequisites

To use this project, you need to have the following installed on your machine:

- Node.js (version 14 or later)
- npm (version 6 or later)

## Getting started

To get started, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/node-express-typescript-backend.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Copy the `.env.example` file to `.env` and edit the values as necessary:

   ```bash
   cp .env.example .env
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   This will start the server and watch for changes to your TypeScript code.

5. Open your web browser and navigate to `http://localhost:3000`. You should see a message that says "Hello, world!".

## Project structure

Here's an overview of the project structure:

```
node-express-typescript-backend/
├── src/
│   ├── controllers/
│   │   └── index.ts
│   ├── middleware/
│   │   ├── error-handler.ts
│   │   └── logger.ts
│   ├── routes/
│   │   └── index.ts
│   ├── app.ts
│   ├── index.ts
│   └── types.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- `src/controllers/`: Contains the controller classes that handle incoming requests.
- `src/middleware/`: Contains the middleware functions that are used to modify requests and responses.
- `src/routes/`: Contains the route definitions for the application.
- `src/app.ts`: Creates and configures the Express application.
- `src/index.ts`: Starts the server.
- `src/types.ts`: Defines custom types for the application.
- `.env.example`: An example configuration file for environment variables.
- `.gitignore`: A list of files and directories that should be ignored by Git.
- `package.json`: Contains information about the project and its dependencies.
- `tsconfig.json`: Configuration file for the TypeScript compiler.

## Available scripts

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Compiles the TypeScript code to JavaScript.
- `npm start`: Starts the server by running the compiled JavaScript code.
- `npm test`: Runs the test suite.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project was inspired by [node-express-typescript-boilerplate](https://github.com/iamnono/node-express-typescript-boilerplate).-->



# scholarx-backend
This is the backend of the ScholarX


## Contribution

#### Want to contribute to this project? 

[**Send us a Pull Request**](https://github.com/sef-global/scholarx-backend/issues)

Read: [Development Best Practices at SEF](https://handbook.sefglobal.org/engineering-team/team)


## Prerequisites

To use this project, you need to have the following installed on your machine:

- Node.js (version 14 or later)
- npm (version 6 or later)


## Getting started

To get started, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/node-express-typescript-backend.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server with :

   ```bash
   npm start
   ```

4. Open your web browser and navigate to `http://localhost:3000`. 


## Project structure

Here's an overview of the project structure:

```
node-express-typescript-backend/
├── src/
│   ├── controllers/
│   │   └── index.ts
│   ├── middleware/
│   │   ├── error-handler.ts
│   │   └── logger.ts
│   ├── routes/
│   │   └── index.ts
│   ├── app.ts
│   ├── index.ts
│   └── types.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

- `src/controllers/`: Contains the controller classes that handle incoming requests.
- `src/middleware/`: Contains the middleware functions that are used to modify requests and responses.
- `src/routes/`: Contains the route definitions for the application.
- `src/app.ts`: Creates and configures the Express application.
- `src/index.ts`: Starts the server.
- `src/types.ts`: Defines custom types for the application.
- `.env.example`: An example configuration file for environment variables.
- `.gitignore`: A list of files and directories that should be ignored by Git.
- `package.json`: Contains information about the project and its dependencies.
- `tsconfig.json`: Configuration file for the TypeScript compiler.