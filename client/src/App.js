import "./App.css";
import { Routes, Route } from "react-router-dom";

import ErrorPage from "./error-page";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import FriendsSuggestions from "./pages/FriendsSuggestions";
import MovieDetails from "./components/movieDetails";
import MoviesList from "./components/MoviesList/MoviesList";
import WatchList from "./pages/WatchList";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/friend-suggestion" element={<FriendsSuggestions />} />
        <Route
          path="/movie-details"
          element={
            <MovieDetails
              movie={{
                adult: false,
                backdrop_path: "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
                belongs_to_collection: {
                  id: 531330,
                  name: "Top Gun Collection",
                  poster_path: "/wtpIx0Gsra1IGHH8af5kNK90Xy8.jpg",
                  backdrop_path: "/eNupRRVv0a4dkVTxOMvG7LhNBaq.jpg",
                },
                budget: 170000000,
                genres: [
                  {
                    id: 28,
                    name: "Action",
                  },
                  {
                    id: 18,
                    name: "Drama",
                  },
                ],
                homepage: "https://www.topgunmovie.com",
                id: 361743,
                imdb_id: "tt1745960",
                original_language: "en",
                original_title: "Top Gun: Maverick",
                overview:
                  "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
                popularity: 653.607,
                poster_path: "/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
                production_companies: [
                  {
                    id: 4,
                    logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
                    name: "Paramount",
                    origin_country: "US",
                  },
                  {
                    id: 10288,
                    logo_path: null,
                    name: "Don Simpson/Jerry Bruckheimer Films",
                    origin_country: "US",
                  },
                  {
                    id: 82819,
                    logo_path: "/zlFa3VNua4hJyGEI4X2sqDrtEH9.png",
                    name: "Skydance Media",
                    origin_country: "US",
                  },
                ],
                production_countries: [
                  {
                    iso_3166_1: "US",
                    name: "United States of America",
                  },
                ],
                release_date: "2022-05-24",
                revenue: 1488732821,
                runtime: 131,
                spoken_languages: [
                  {
                    english_name: "English",
                    iso_639_1: "en",
                    name: "English",
                  },
                ],
                status: "Released",
                tagline: "Feel the need... The need for speed.",
                title: "Top Gun: Maverick",
                video: false,
                vote_average: 8.332,
                vote_count: 5653,
              }}
            />
          }
        />
        <Route path="/movies-list" element={<MoviesList />} />
        <Route path="/watch-list" element={<WatchList />} />
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
