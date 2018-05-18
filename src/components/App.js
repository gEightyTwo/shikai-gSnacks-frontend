import React, { Component } from 'react';
import '../App.css';
import LoginModal from './LoginModal'
import Banner from './Banner'
import SnackList from './SnackList'

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      state: [],
      show: false
    }
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="App">
        <Banner handleShow={this.handleShow} />
        {/* <SnackList /> */}
        <LoginModal handleClose={this.handleClose} handleShow={this.handleShow} show={this.state.show}/>
      </div>
    );
  }
}

export default App;
