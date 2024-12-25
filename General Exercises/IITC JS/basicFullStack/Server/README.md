# practice2 api project

## Jokes api:not up to date
last updated:
## Users api:not up to date
last updated:2024-11-03?

base route: /api/users

## Endpoints
1. Get All Users

Route: GET /

Description: Retrieves all users from the database.

Response:

Status Code: 200 (OK)
Body: JSON object with a users property containing an array of user objects. Each user object has the following properties:
_id: (Mongoose generated ID)
name: User's name (string)
email: User's email address (string)
password: User's password (string) 
Example:

GET /
Response Example:
JSON
{
  "users": [
    {
      "_id": "6362f2d1234567890abcde12",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "password": "1234"  
    },
    {
      "_id": "6362f2d1234567890abcde13",
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "password": "1234"  
    }
  ]
}


2. Get User by ID

Route: GET /:id

Description: Retrieves a specific user by their ID.

Parameters:

id: The unique identifier of the user (string)
Response:

Status Code:
200 (OK): User found
404 (Not Found): User with the provided ID not found
Body: JSON object containing the user object with the same properties as in the Get All Users response.
Example:

GET /6362f2d1234567890abcde12
Response Example (Success):
JSON
{
  "_id": "6362f2d1234567890abcde12",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "1234"  
}


Response Example (Failure - User Not Found):
JSON
{
  "message": "User not found"
}

3. Add Single User

Route: POST /single

Description: Creates a new user.

Request Body:

A JSON object with a user property containing the following properties:
name: User's name (string)
email: User's email address (string)
password: User's password (string)
Response:

Status Code:
201 (Created): User created successfully
400 (Bad Request): Validation error (e.g., missing required field)
Body: JSON object containing the newly created user with the same properties as in the Get All Users response.
Example:

JSON
POST /single
{
  "user": {
    "name": "New User",
    "email": "newuser@example.com",
    "password": "password123"
  }
}

Response Example (Success):
JSON
{
  "_id": "6362f2d1234567890abcdef14",
  "name": "New User",
  "email": "newuser@example.com",
  "password": "password123"  
}


4. Add Multiple Users

Route: POST /many
Description: Creates multiple users at once.
Request Body:
A JSON object with a users property containing an array

## Products api: