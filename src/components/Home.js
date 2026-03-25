import React, { useEffect } from "react";
import { Button, Container } from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Prisha AI Tech Solutions";
  }, []);

  return (
    <div style={{ backgroundColor: "#f9faf8" }}>
      <Container className="text-center my-5 p-5 bg-white rounded-3 shadow-lg">
        <h1 className="display-4 fw-bold text-dark">Welcome to Prisha AI Tech Solutions</h1>
        <p className="lead">Innovative AI solutions for a smarter future.</p>
        <Button color="info" size="lg" className="mt-3">Explore Our Services</Button>
      </Container>

      <Container className="my-5">
        <h2 className="text-center mb-4 text-dark">Our Expertise</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 bg-light">
              <div className="card-body">
                <h5 className="card-title text-primary">AI Consulting</h5>
                <p className="card-text">Get expert advice on AI implementation for your business.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 bg-light">
              <div className="card-body">
                <h5 className="card-title text-primary">Custom Solutions</h5>
                <p className="card-text">Tailored AI solutions to meet your unique business needs.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 bg-light">
              <div className="card-body">
                <h5 className="card-title text-primary">Data Analytics</h5>
                <p className="card-text">Analyzing and visualizing data to inform business decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;