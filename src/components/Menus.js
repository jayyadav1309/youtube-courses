import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, Container, Row, Col } from "reactstrap";

const Menus = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Link className="list-group-item list-group-item-action text-dark bg-info" to="/">
              <i className="fa fa-home me-2"></i> Home
            </Link>
            <Link className="list-group-item list-group-item-action text-dark bg-info" to="/add-course">
              <i className="fa fa-plus me-2"></i> Add Course
            </Link>
            <Link className="list-group-item list-group-item-action text-dark bg-info" to="/view-course">
              <i className="fa fa-eye me-2"></i> View Course
            </Link>
            <Link className="list-group-item list-group-item-action text-dark bg-info" to="#!">
              <i className="fa fa-info-circle me-2"></i> About
            </Link>
            <Link className="list-group-item list-group-item-action text-dark bg-info" to="#!">
              <i className="fa fa-envelope me-2"></i> Contact
            </Link>
          </ListGroup>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <img
            src="https://i.postimg.cc/qMNyq1FP/Banner_Image.jpg"
            alt="Banner"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Menus;