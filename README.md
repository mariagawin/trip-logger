# Trip Logger

## Aims

- To allow a person to log their trips to different countries (MVP)
- To allow them to see which countries they have left to visit \*

### Run Commands

| Environment | Server  | Client               |
| ----------- | ------- | -------------------- |
| DEV:        | nodemon | vite-dev-server      |
| PROD:       | node    | _static file served_ |

### Hosting

| Service | Server | Client        |
| ------- | ------ | ------------- |
| local   | node   | mongodb       |
| remote  | heroku | Mongodb Atlas |

## Data Shape

### Entities

- Places (countries) <https://restcountries.com/v3.1/all>
- Users (Auth0 - sub(id)) - store extra information
- Trips [user, place, date]

### Views

- Profile (see your own trips)
- Unvisited countries
- Leaderboard - who has visited the most countries
