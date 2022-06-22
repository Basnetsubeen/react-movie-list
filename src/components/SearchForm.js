import React from "react";
import { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";

export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
    e.target.reset(); // helps to empty the field after one search
  };
  return (
    <div className="mt-5 text-center">
      <h1>My Movie List</h1>
      <Form className="mt-3" onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="Search Movie Name ...."
            />
          </Col>

          <Col>
            <Button type="submit" className="px-5" variant="info">
              List
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

// import React from "react";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import { Button } from "react-bootstrap";
// import { useState } from "react";

// export const SearchForm = ({ handleOnSubmit }) => {
//   const [str, setStr] = useState("");

//   const handleOnChange = (e) => {
//     const { value } = e.target;
//     setStr(value);
//   };

//   const formSubmit = (e) => {
//     e.preventDefault();
//     handleOnSubmit(str);
//   };
//   console.log(str);
//   return (
//     <div className="mt-5 text-center">
//       <h1>My Movie List</h1>
//       <Form className="mt-3" onSubmit={formSubmit}>
//         <Row>
//           <Col>
//             <Form.Control
//               onChange={handleOnChange}
//               placeholder="Search Movie Name ...."
//             />
//           </Col>

//           <Col>
//             <Button type="submit" className="px-5" variant="info">
//               List
//             </Button>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };
