const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex')(require('./knexfile').development);
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/movies', async (req, res) => {
  try {
    const movies = await knex('movies').select('*');
    res.json(movies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// app.post('/movies', async (req, res) => {
//   const { title } = req.body;
//   try {
//     const [newMovie] = await knex('movies').insert({ title }, ['id', 'title', 'watched']);
//     res.json(newMovie);
//   } catch (err) {
//     console.error('error adding movie: ', err.message);
//     res.status(500).send('Error adding movie');
//   }
// })

app.post('/movies', async (req, res) => {
  const { title } = req.body;
  try {
    const tmdbData = await fetchMovieDetailsFromTMDb(title);
    
    const [newMovie] = await knex('movies').insert({
      title,
      overview: tmdbData.overview,
      poster_path: tmdbData.poster_path,
      tmdb_id: tmdbData.id,
      release_date: tmdbData.release_date,
      // Include additional data as needed
    }, '*');
    res.json(newMovie);
  } catch (error) {
    console.error('Error adding movie: ', error.message);
    res.status(500).send('Error adding movie');
  }
});

async function fetchMovieDetailsFromTMDb(title) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURI(title)}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}` 
    }
  };

  const response = await fetch(url, options);
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const { id, overview, poster_path, release_date } = data.results[0];
    return { id, overview, poster_path, release_date };
  } else {
    throw new Error('Movie not found');
  }
}



// DELETE route
app.delete('/movies/:id', async (req, res) => {
  try {
    await knex('movies').where('id', req.params.id).del();
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting movie: ', error.message);
    res.status(500).send('Error deleting movie');
  }
});


// PATCH route to update 'watched' status
app.patch('/movies/:id', async (req, res) => {
  const { watched } = req.body;
  try {
    await knex('movies').where('id', req.params.id).update({ watched });
    res.json({ id: req.params.id, watched });
  } catch (error) {
    console.error('Error updating movie: ', error.message);
    res.status(500).send('Error updating movie');
  }
});



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});