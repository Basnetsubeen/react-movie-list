import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { SearchForm } from "./components/SearchForm";
import { CustomCard } from "./components/CustomCard";
import "./App.css";
import { MovieList } from "./components/MovieList";
import { fetchMovieInfo } from "./helpers/axiosHelper";
import { Alert } from "react-bootstrap";

function App() {
  const [movie, setMovie] = useState({});
  const [showError, setShowError] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    const result = await fetchMovieInfo(str);
    setMovie(result);

    result.Response === "False" ? setShowError(result.Error) : setShowError("");
    // Using ternary operator above
    // or    we can use below code to replace above code
    // if(result.Response === "True"){
    //     setMovie(result);
    //     setShowError("");
    //  }else {
    //    setMovie({});
    //    setShowError(result.Error);
    //  };
  };

  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  const deleteMovie = (imbdID) => {
    if (window.confirm("Are you sure you want to delete the movie??")) {
      const filterArg = movieList.filter((item) => item.imdbID !== imbdID); // {item.2, 3 ,4 == 2} numbers are imbdID
      setMovieList(filterArg);
    }
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          {/* movie.imbdID removes the post card template in ititial state */}
          {movie.imdbID && (
            <CustomCard movie={movie} func={movieSelect} inSearchForm={true} />
          )}

          {showError && <Alert variant="danger">{showError}</Alert>}
        </div>

        <MovieList deleteMovie={deleteMovie} movieList={movieList} />
        <hr />
      </Container>
    </div>
  );
}

export default App;

//
//  New Practice
//

// import React from "react";
// import { Container } from "react-bootstrap";
// import { SearchForm } from "./components/SearchForm";
// import { CustomCard } from "./components/CustomCard";
// import { MovieList } from "./components/MovieList";
// import { useState } from "react";
// import { fetchMovieInfo } from "./helpers/axiosHelper";
// import { Alert } from "react-bootstrap";

// const App = () => {
//   const [movie, setMovie] = useState({});
//   const [showError, setShowError] = useState("");

//   const handleOnSubmit = async (str) => {
//     const result = await fetchMovieInfo(str);
//     setMovie(result);

//     result.Response === "false" ? setShowError(result.Error) : setShowError("");
//   };
//   console.log(movie);
//   return (
//     <div className="wrapper">
//       <Container>
//         <SearchForm handleOnSubmit={handleOnSubmit} />
//         <div className="mt-4 d-flex justify-content-center">
//           {/* <CustomCard movie={movie} /> */}
//           {movie.imdbID && <CustomCard movie={movie} />}
//           {showError && <Alert variant="danger">{showError}</Alert>}
//         </div>
//         <MovieList />
//         <hr />
//       </Container>
//     </div>
//   );
// };

// export default App;
