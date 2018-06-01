import React from "react";
import { Modal } from "react-bootstrap";
import '../style/NewUserForm.css'

const NewUserForm = props => {
  return (
    <Modal.Body>
      {
        <form className='newUserFormBody'>
          <label>
            First Name:
            <input
              type="text"
              className="firstName"
              name="firstName"
              onChange={event => {
                props.settingFormToState(event.target);
              }}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              className="lastName"
              name="lastName"
              onChange={event => {
                props.settingFormToState(event.target);
              }}
            />
          </label>
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

export default NewUserForm;
