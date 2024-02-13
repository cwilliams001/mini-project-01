# Movie List Application

## Project Overview

This is a full-stack application that allows users to add, search, and keep track of movies they want to watch. It utilizes React for the frontend, Express.js for the backend, and PostgreSQL for the database. It also integrates with The Movie Database (TMDb) API to fetch movie details.

## Technologies Used

- React
- Node.js
- Express.js
- PostgreSQL
- Knex.js
- Tailwind CSS
- The Movie Database (TMDb) API
- Docker (for containerization)

## Local Development Setup

## Option 1: Docker
1. Install Docker and Docker Compose.
2. Clone the repository.
3. Navigate to the root directory.
4. Make `docker-startup.sh` executable: `chmod +x docker-startup.sh`.
5. Run the startup script: `./docker-startup.sh`.
6. Script will run the backend and frontend containers and set up the database. It will also clean up images after the script is interrupted. with `Ctrl+C`.
7. Access the application at `http://localhost:3000`.



## Option 2: npm scripts
### Backend Setup

1. Navigate to the `server` directory.
2. Install dependencies: `npm install`.
3. Set up the PostgreSQL database and update `knexfile.js` with the correct credentials.
4. Run database migrations: `npx knex migrate:latest`.
5. Start the server: `npm start`.

### Frontend Setup

1. Navigate to the `client` directory.
2. Install dependencies: `npm install`.
3. Start the React development server: `npm start`.

## Current Progress

- **Level 0-4**: Complete
  - Users can add movies, mark them as watched, and filter the movie list.
- **Level 5**: In Progress
  - A panel for displaying movie details is implemented.
  - TMDb integration is set up to fetch movie details when adding a new movie.

## Next Steps

- Finalize the movie information panel to ensure it displays correct movie details.
- Enhance error handling for TMDb API integration.
- Improve the styling of the application, taking inspiration from Jellyseerr's UI for a modern and user-friendly design.
- Implement dark mode toggle functionality.

## Known Issues

- Error handling for TMDb API requests needs improvement.
- Styling is not yet finalized.

