import React from "react";
import { Modal } from "react-bootstrap";
import '../style/LoginForm.css'

const LoginForm = props => {
  return (
    <Modal.Body>
      {
        <form className='loginFormBody'>
          <label>
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
          <label>
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
