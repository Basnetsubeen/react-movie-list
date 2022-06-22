import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CustomList = ({ movie = {}, func, inSearchForm, deleteMovie }) => {
  const { Title, Poster, imdbRating, Plot } = movie;
  console.log(`movie ${movie}`);

  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between h-100"
    >
      {/* h-100 gives equal height to all cards */}
      <div style={{ width: "300px" }}>
        <Card.Img
          variant="top"
          src={Poster}
          Style={{ width: "300px" }}
          className="h-100"
        />
      </div>
      <Card.Body>
        <Card.Title>ListView: {Title}</Card.Title>
        <Card.Title> Rating:{imdbRating}</Card.Title>
        <div>{Plot}</div>
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
