import React from "react";
import { Modal } from "react-bootstrap";

const LoginForm = props => {
  return (
    <Modal.Body style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
      {
        <form action="">
          <label htmlFor="">
            Email:
            <input
              type="email"
              className="email"
              name="email"
              onChange={event => {
                props.settingFormToState(event.target);
              }}
            />
          </label>
          <label htmlFor="">
            Password:
            <input
              type="password"
              className="password"
              name="password"
              onChange={event => {
                props.settingFormToState(event.target);
              }}
            />
          </label>
        </form>
      }
    </Modal.Body>
  );
};

export default LoginForm;
