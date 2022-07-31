#  Content Creation Panel
## Languages and Frameworks
 - PostgreSQL & NestJS & TypeORM & React  
 - Used Docker.
 - Jest & unit testing
 -  Postman & e2e testing

## Description

 - Content Creation Panel web application that has all the CRUD operations.
 -  JWT for authentication.
 -  Data validation. 
 - We have 3 types of users; Admin, Editor, User.
 
 
 **Admin**
  
| Table    | Read | Write | Update | Delete |
| -------- | ---- | ----- | ------ | ------ |
| Users    | ✓    | ✓     | ✓      | ✓      |
| Contents | ✓    | ✓     | ✓      | ✓      |

**Editor**

| Table    | Read   | Write | Update | Delete |
| -------- | ------ | ----- | ------ | ------ |
| Users    | itself | | itself |itself         |
| Contents | ✓      | ✓     | ✓      |        |

**User**

| Table    | Read   | Write | Update | Delete |
| -------- | ------ | ----- | ------ | ------ |
| Users    | itself | 		| itself | itself |
| Contents | ✓      |       |        |        |

###  Running with docker
```bash
docker-compose up -d
```
**Starts the containers in the background and leaves them running.**
 - Started on http://localhost:3000


### Locally Installation and Running
#### Backend
```bash
yarn
```
```bash
yarn start
```
Started on http://localhost:5000
#### Frontend
```bash
yarn
```
```bash
yarn start
```
Started on http://localhost:3000

### At the first opening
- **username**: admin
- **password**: 123456789
### Testing
#### Unit testing
**On backend**
```bash
yarn test
```
#### e2e api testing
**On backend**
Install dependencies
```bash
yarn
```
Start the backend locally.
```bash
yarn start
```
Start  test
```bash
yarn test:e2e
```
#### API Documentation
 - https://documenter.getpostman.com/view/14007640/Uzdv1Sva

## Models
### User Model
 -  id: string;
 - firstName: string;
 -  lastName: string;
 -  username: string;
 -  password: string;
 - role: Role;
 - refreshToken: string;
 -  isActive: boolean;

### Content Model
 -  id: string;
 -  name: string;
 -  description: string;
 -  dateCreated: Date;

## Docker 
Docker is a tool designed to make it easier for developers to develop, ship, and run applications by using containers. Containers allow devs to package an application with all of its requirements and configurations, such as libraries and other dependencies and deploy it as a single package. By doing so, we can rest easy knowing that the software will work properly on other systems besides the one they used for writing the code.
Docker is here for the rescue! It provides a dependency management mechanism where each project/app can be isolated with all its dependencies in a separate container and the cherry on the top is that you can run multiple apps (containers) concomitantly on the same machine.

##  JWT for authentication
JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a way for transmitting information –like authentication and authorization facts– between two parties: an issuer and an audience.

## PostgreSQL
Data integrity: Postgres provides your data integrity by introducing constraints and regulating data you add. With PostgreSQL, you can forget about invalid or orphan records.
Performance: Parallelization of read queries, powerful indexing methods, Multiversion concurrency control. These are only a few of numerous features implemented by PostgreSQL to boost and optimize its performance.

## NestJS
 NestJS is used for writing scalable, testable and loosely coupled applications. NestJS is easily extendible, as it can be used with other libraries; versatile thanks to its adaptive fully-fledged ecosystem and progressive, bringing JavaScript features and design patterns.
 
- Modules: used to organize the code and split features into logical reusable units. Grouped TypeScript files are decorated with “@Module” decorator which provides metadata that Nest makes use of to organize the application structure.
- Providers: also called services, which are designed to abstract any form of complexity and logic. Providers can be created and injected into controllers or other providers.
- Controllers: responsible for handling incoming requests and returning appropriate responses to the client-side of the application (for example call to the API).
- The use of TypeScript helps ensure that Nest will remain relevant in the rapidly changing JavaScript landscape and gives developers less context switching.
- Great documentation.

## TypeORM
TypeORM is an Object Relational Mapper library running in node.js and written in TypeScript. TypeScript is an improvement to JavaScript with optional typing. TypeScript is a compiled language. It is not interpreted at run-time. 
- Automatically create database table schemes based on your models.
- Easily insert, update and delete object in the database.
- Create mapping (one-to-one, one-to-many and many-to-many) between tables.
- Provides simple CLI commands.

## React
React is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.
### Why i used TypeScript with React?
- Easy to read and understand components
- Better support for JSX
-  Default TypeScript support for common libraries
- Gradual adoption for existing projects
- Benefits comes with Static type checking and IntelliSense in general

## Axios
Axios is a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
