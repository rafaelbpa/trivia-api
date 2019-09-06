# trivia-api

Small api project as parte of challenge to frontend trivia

# Usage
Clone this repository
```
git clone https://github.com/rafaelbpa/trivia-api.git
```

and install the dependencies
```
cd trivia-api && yarn
```

Run the project
```
yarn dev
```

# Routes

Just two routes: <br />
GET /trivia - list all trivias<br />
POST /trivia - create a new trivia data e.g.,
```
{
	"questionNumber": 23,
	"difficulty": "medium",
	"user_answer": "teste",
	"correct_answer": "teste",
	"is_correct": false
}
```

Response should be something like:
```
{
  "_id": "5d72ac363354ed59c98f4d50",
  "question_number": 23,
  "difficulty": "medium",
  "user_answer": "teste",
  "correct_answer": "teste",
  "is_correct": true,
  "createdAt": "2019-09-06T18:57:58.804Z",
  "updatedAt": "2019-09-06T18:57:58.804Z",
  "__v": 0
}
```
