#  Content Creation Panel
## Languages and Frameworks
 - PostgreSQL & NestJS & TypeORM & React  
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
