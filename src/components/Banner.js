import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import "../Banner.css";
import { withAuthentication } from "../helper";

const Banner = ({ handleShow, authState, authStatePending }) => {
  return (
    <Jumbotron className="banner container-fluid">
      <h1 className="banner-title">ShiKai Snacks</h1>

      <p>
        {!authState && !authStatePending? (
          <Button
            className="login-modal-button"
            bsStyle="primary"
            bsSize="large"
            onClick={handleShow}
          >
            Login
          </Button>
        ) : null}
      </p>
    </Jumbotron>
  );
};

export default withAuthentication(Banner);
