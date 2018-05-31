// Modules
import React, { Component } from 'react';
import axios from 'axios'

// Files
import '../App.css';
import LoginModal from './LoginModal'
import Banner from './Banner'
import SnackList from './SnackList'
import CardModal from './CardModal'

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      snacks: [],
      cardShow: false,
      currSnack: {},
      currReviews:[],
      addReview: false,
      show: false,
    }
  }

  updateState = async () => {
    //Async and await so we can setState AFTER we get the data
    const getAllSnacksResponse = await axios.get('http://localhost:3000/snacks')
    this.setState({ snacks: getAllSnacksResponse.data.data })
  }

  // Review Modal Methods  //
  handleCardShow = (id) => {
    this.setState({ cardShow: true })
    this.updateCurrSnackState(id)
  }

  handleCardClose = () => {
    this.setState({ cardShow: false })
  }

  handleReviewFormShow = () => {
    this.setState({ addReview: true })
  }

  handleReviewFormClose = () => {
    this.setState({ addReview: false })
  }

  updateCurrSnackState = async (id) => {
    // Snack Info
    const getOneSnack = await axios.get(`http://localhost:3000/snacks/${id}`)
    this.setState({ currSnack: getOneSnack.data.data })
    // Reviews
    const getSnackReviews = await axios.get(`http://localhost:3000/snacks/${id}/reviews`)
    this.setState({ currReviews: getSnackReviews.data.data })
  }

  // Login Modal Methods //
  handleClose = () => {
    this.setState({ show: false });
    // console.log(this.state.show)
  }

  handleShow = () => {
    this.setState({ show: true });
    // console.log(this.state.show)
  }

  //////////////////////
  // MOUNTING METHODS //
  //////////////////////
  componentWillMount = () => {
    this.updateState()
    // console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Banner handleShow={this.handleShow} />
        { this.state.show ? <LoginModal handleClose={this.handleClose}/> : null}
        <CardModal handleCardClose={this.handleCardClose} handleCardShow={this.handleCardShow} 
          cardShow={this.state.cardShow} currSnack={this.state.currSnack} 
          currReviews={this.state.currReviews} addReview={this.state.addReview}
          handleReviewFormShow={this.handleReviewFormShow} handleReviewFormClose={this.handleReviewFormClose}/>
        <SnackList snackData={this.state.snacks} handleCardShow={this.handleCardShow} />
      </div>
    );
  }
}

export default App;
