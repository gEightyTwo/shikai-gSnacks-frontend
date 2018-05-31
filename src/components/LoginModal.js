import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { request } from "../helper/index";
import LoginForm from './LoginForm'
import NewUserForm from './NewUserForm'

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      newUser: false
    };
  }

  settingFormToState = ({name, value}) => {
    this.setState({[name]: value})
  }

  handleNewUser = () => {
    this.setState({ newUser: true })
  }

  loginSubmit = () => {
    request("/auth/token", "post", {
      email: this.state.email,
      password: this.state.password
    }).then(response => {
      localStorage.setItem("token", response.data.token);
    });
  };

  render() {
    return (
      <div>
        <Modal show={true} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Login or Signup</Modal.Title>
          </Modal.Header>
          {this.state.newUser ? <NewUserForm {...this.props} handleNewUser={this.handleNewUser} settingFormToState={this.settingFormToState} /> : <LoginForm {...this.props} handleNewUser={this.handleNewUser} settingFormToState={this.settingFormToState} />}
          <Modal.Footer>
            <Button
              onClick={event => {
                this.loginSubmit();
              }}>
              Login
            </Button>
            <Button
             onClick={this.handleNewUser}>
            New User
            </Button>
            <Button onClick={this.props.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
