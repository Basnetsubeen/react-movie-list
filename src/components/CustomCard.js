import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ movie = {}, func, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating } = movie;
  console.log(`movie ${movie}`);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Poster} className="h-100" />
        <Card.Body>
          <Card.Title>{Title}</Card.Title>
          <Card.Title> Rating:{imdbRating}</Card.Title>
          {inSearchForm ? (
            <div className="d-flex justify-content-between mt-3">
              {/* ()=> func() invoking a function on click */}
              <Button
                variant="primary"
                onClick={() => func({ ...movie, mood: "happy" })}
              >
                Happy
              </Button>
              <Button
                variant="danger"
                onClick={() => func({ ...movie, mood: "romantic" })}
              >
                Romantic
              </Button>
            </div>
          ) : (
            <div className="d-grid gap-2">
              <Button
                variant="danger"
                size="lg"
                onClick={() => deleteMovie(movie.imdbID)}
              >
                Delete Movie
              </Button>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// export const CustomCard = ({ movie = {} }) => {
//   const { Title, Poster, imdbRating } = movie;
//   console.log(movie);
//   return (
//     <div>
//       <Card style={{ width: "18rem" }}>
//         <Card.Img variant="top" src={Poster} />
//         <Card.Body>
//           <Card.Title>{Title}</Card.Title>
//           <Card.Title>Rating: {imdbRating} </Card.Title>

//           <div className="d-flex justify-content-between mt-3">
//             <Button variant="primary">Happy</Button>
//             <Button variant="danger">Romantic</Button>
//           </div>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };
