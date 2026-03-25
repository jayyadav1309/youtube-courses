import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title }) {
  return (
    <div>
      <Card className="my-3 bg-info text-white">
        <CardBody>
          <div className="d-flex align-items-center justify-content-center">
            <img src="https://i.postimg.cc/DZ5Yp63n/Prisha-AILogo.png" alt="Prisha AI Logo" width="80" height="80" className="me-3" />
            <div>
              <h1 className="text-center my-2">Prisha AI Tech Solutions</h1>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;