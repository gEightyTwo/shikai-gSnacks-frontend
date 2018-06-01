import React from "react";
import { Button } from "react-bootstrap";
import "../style/Banner.css";
import { withAuthentication } from "../helper/helper";

const Banner = ({ handleShow, authState, authStatePending }) => {
  return (
    <div className="banner container-fluid">
      <div className="row bannerRowOne">
        <div className="col" />
        <div className="col">
          <h1 className="banner-title">ShiKai Snacks</h1>
        </div>
        <div className="col">
          <p>
            {!authState && !authStatePending ? (
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
        </div>
      </div>
    </div>
  );
};

export default withAuthentication(Banner);
