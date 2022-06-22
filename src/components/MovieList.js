import React from "react";
import { Row, Col, ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { useState } from "react";
import { useEffect } from "react";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState(movieList);
  const [view, setView] = useState("grid");

  // if we use the usestate to store the variable and if it doesn't gets updatd
  // then we use useEffect to update that value and movielist is a dependencies that helps to update/rerender a
  // once at a time
  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (mood) => {
    if (mood === "all") {
      setDisplayList(movieList);
      return;
    }
    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };

  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic-example">
            <Button variant="primary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => filterMovie("happy")}>
              Happy
            </Button>
            <Button variant="success" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic-example">
            <Button variant="secondary" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="success" onClick={() => setView("list")}>
              List
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
      <br />
      <h2>Movie Found : {displayList.length}</h2>

      <Row className="mt-5">
        <Col className="d-flex justify-content-between flex-wrap">
          {displayList.map((item, i) =>
            view === "grid" ? (
              <CustomCard key={i} movie={item} deleteMovie={deleteMovie} />
            ) : (
              <CustomList key={i} movie={item} deleteMovie={deleteMovie} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
