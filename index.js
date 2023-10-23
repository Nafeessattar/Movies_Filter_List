const movies = [
    {
      name: "Deadpool",
      type: "Comedy",
      rating: 4.5,
      hours: 2,
      image: "https://i.ytimg.com/vi/zdYqnjYNa6g/sddefault.jpg",
    },
    {
      name: "Free Guy",
      type: "Comedy",
      rating: 4.0,
      hours: 1.5,
      image: "https://source.boomplaymusic.com/buzzgroup2/M00/38/5B/rBEeJGK9ZpSAI4RIAALMqMdQFOg184.jpg",
    },
    {
      name: "The Dictator",
      type: "Comedy",
      rating: 4.2,
      hours: 1.8,
      image: "https://gumlet.assettype.com/bloombergquint/2023-06/ab7c76d5-9c6f-4750-aa28-79b55d131005/1616e62df3679651586aa87fe32734cf89df9f06f2caa0c11bfec86a0e4aa15a__RI_TTW_.jpg",
    },
    {
      name: "Hera Pheri",
      type: "Comedy",
      rating: 4.3,
      hours: 2.3,
      image: "https://www.beyoung.in/beyoungistan/wp-content/uploads/2023/07/Hera-Pheri-1024x709.jpg",
    },
    {
      name: "Dhamaal",
      type: "Comedy",
      rating: 4.1,
      hours: 2.2,
      image: "https://static.javatpoint.com/best/images/best-comedy-movies-bollywood16.png",
    },
    {
      name: "Blood Song",
      type: "Fighting",
      rating: 3.8,
      hours: 2.5,
      image: "https://www.orbitbooks.net/wp-content/uploads/2013/07/BloodSong1.jpg",
    },
    {
      name: "Commando 2",
      type: "Fighting",
      rating: 4.2,
      hours: 2,
      image: "https://www.reviewsxp.com/blog/wp-content/uploads/2018/11/Commando-2-350x467.jpg",
    },
    {
      name: "Liger",
      type: "Fighting",
      rating: 4.2,
      hours: 2,
      image: "https://m.media-amazon.com/images/M/MV5BOGFjYjFhMGUtZDE3Mi00OGE0LWI4YjUtZmRhZGEyYzliMWJmXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_.jpg",
    },
    {
      name: "Brothers",
      type: "Fighting",
      rating: 4.4,
      hours: 2.8,
      image: "https://m.media-amazon.com/images/M/MV5BNzQ4Njg3Mjg5Nl5BMl5BanBnXkFtZTgwODE5MDg1NjE@._V1_.jpg",
    },
    {
      name: "Singham",
      type: "Fighting",
      rating: 3.9,
      hours: 2.2,
      image: "https://images.bewakoof.com/utter/content/4863/content_Singham_-_Bollywood_Hindi_Action_Movies_-_Bewakoof_Blog.jpg",
    },
    {
      name: "The Monkey King",
      type: "Adventure",
      rating: 3.7,
      hours: 2.5,
      image: "https://s3.amazonaws.com/static.rogerebert.com/uploads/movie/movie_poster/the-monkey-king-2023/widget_the-monkey-king-movie-poster-2023.jpg",
    },
    {
      name: "Journey 2",
      type: "Adventure",
      rating: 4.6,
      hours: 2.5,
      image: "https://jswtv.tv/wp-content/uploads/2023/03/Journey-2-The-Mysterious-Island-2012.jpg",
    },
    {
      name: "Dora And Jungle Adventure",
      type: "Adventure",
      rating: 3.9,
      hours: 2.2,
      image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg",
    },
    {
      name: "Jumanji",
      type: "Adventure",
      rating: 4.3,
      hours: 2.4,
      image: "https://images-0.rakuten.tv/storage/global-movie/translation/artwork/b1505197-0d5b-41bd-bed4-fea89ec610c6-jumanji-welcome-to-the-jungle-1611335808-width317-quality60.jpeg",
    },
    {
      name: "The Old Guard",
      type: "Action",
      rating: 5,
      hours: 2.4,
      image: "https://m.media-amazon.com/images/M/MV5BZTY5YTk0ZDMtODg0Zi00OGM4LTgxMTQtODAzODg2ZjE2MmM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    }
  ];

const movieTypeSelect = document.getElementById("movieTypeSelect");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");
const ratingFilter = document.getElementById("ratingFilter");

function populateMovieTypes() {
  const movieTypes = [...new Set(movies.map((movie) => movie.type))];
  var option = document.createElement("option");
  option.value = "all";
  option.textContent = "all";
  movieTypeSelect.appendChild(option);

  movieTypes.forEach((type) => {
    var option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    movieTypeSelect.appendChild(option);
  });
}

function populateRatingFilter() {
  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    ratingFilter.appendChild(option);
  }
}

function generateMovies() {
  const selectedType = movieTypeSelect.value;
  const selectedRating =ratingFilter.value; // Convert the selected rating to a number
  const searchQuery = searchInput.value.toLowerCase();

  movieContainer.innerHTML = "";

  movies
    .filter((movie) => (selectedType === "all" || movie.type === selectedType))
    .filter((movie) => movie.rating >= selectedRating) // Adjust the filter to check if rating is greater than or equal to the selected rating
    .filter((movie) => movie.name.toLowerCase().includes(searchQuery))
    .forEach((movie) => {
      displayMovie(movie);
    });
}

function displayMovie(movie) {
  const movieDiv = document.createElement("div");
  movieDiv.classList.add("movie");
  movieDiv.innerHTML = `
      <h2>${movie.name}</h2>
      <p>Type: ${movie.type}</p>
      <p>Rating: ${movie.rating}</p>
      <p>Duration: ${movie.hours} hours</p>
      <img src="${movie.image}" alt="${movie.name}" />
  `;
  movieContainer.appendChild(movieDiv);
}
populateMovieTypes();
populateRatingFilter();
generateMovies();

// Add event listeners to update the movie list when filters change.
movieTypeSelect.addEventListener("change", generateMovies);
ratingFilter.addEventListener("change", generateMovies);
searchInput.addEventListener("input", generateMovies);