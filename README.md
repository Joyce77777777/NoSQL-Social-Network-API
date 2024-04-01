# NoSQL Social Network API 

## Assigned User Story:
```
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

## Acceptance Criteria:
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Instructions:

1. Install Node.JS and MongoDB to the environment this app will be running on. Optionally, install MongoDB Compass to view DB instances.
2. Open project root and run `npm install`
3. If desired, create a .env file in the root directory of the project with `MONOGDB_URI`, otherwise defaults will be used 
4. Once the server is running, use a tool like Insomnia to test the API endpoints. 
5. Run `npm start` to start the app.
6. Use Insomnia to test http://localhost:3001 with the documented routes below.

#### Available Endpoints:

Each endpoint must include the necessary data in the request body or URL parameters as specified in the acceptance criteria.

- GET /api/users - get all users
- GET /api/users/:userId - get a single user by ID
- POST /api/users - create a new user
- PUT /api/users/:userId - update a user by ID
- DELETE /api/users/:userId - delete a user by ID
- GET /api/thought - get all thought
- GET /api/thought/:thoughtId - get a single thought by ID
- POST /api/thought - create a new thought
- PUT /api/thought/:thoughtId - update a thought by ID
- DELETE /api/thought/:thoughtId - delete a thought by ID
- POST /api/thought/:thoughtId/reactions - add a reaction to a thought
- DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
- POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
- DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

## Repo Location
This project is found here: https://github.com/Joyce77777777/NoSQL-Social-Network-API
