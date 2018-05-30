import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { request } from '../helper/index'

class LoginModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  loginSubmit = () => {
    request('/auth/token', 'post', { email: this.state.email, password: this.state.password })
      .then(response => {
        localStorage.setItem('token', response.data.token)
      })
  }

  render() {
    return (
      <div>
      <Modal show={true} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ maxHeight: "calc(100vh - 210px)", overflowY: "auto" }}
        >
          {
            <form action="">
              <label htmlFor="">
                Email:
                <input type="email" className="email" 
                onChange={event => {
                  this.setState({email: event.target.value})
                }}
                />
              </label>
              <label htmlFor="">
                Password:
                <input type="password" className="password" 
                onChange = {event => {
                  this.setState({password: event.target.value})
                }}
                />
              </label>
            </form>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={event => {
              this.loginSubmit()
            }}
          >
            Login
          </Button>
          <Button onClick={this.props.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
}


export default LoginModal;
