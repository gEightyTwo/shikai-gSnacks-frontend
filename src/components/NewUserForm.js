import React from "react";
import { Modal } from "react-bootstrap";

const NewUserForm = props => {
  return (
    <Modal.Body style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}>
      {
        <form>
          <label>
            First Name:
            <input
              type="text"
              className="firstName"
              onChange={event => {
                props.settingFormToState(
                  event.target.value,
                  undefined,
                  undefined,
                  undefined
                );
              }}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              className="lastName"
              onChange={event => {
                props.settingFormToState(
                  undefined,
                  event.target.value,
                  undefined,
                  undefined
                );
              }}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              className="email"
              onChange={event => {
                props.settingFormToState(
                  undefined,
                  undefined,
                  event.target.value,
                  undefined
                );
              }}
            />
          </label>
          <label htmlFor="">
            Password:
            <input
              type="password"
              className="password"
              onChange={event => {
                props.settingFormToState(
                  undefined,
                  undefined,
                  undefined,
                  event.target.value
                );
              }}
            />
          </label>
        </form>
      }
    </Modal.Body>
  );
};

export default NewUserForm;
