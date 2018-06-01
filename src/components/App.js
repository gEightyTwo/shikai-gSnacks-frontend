// Modules
import React, { Component } from 'react';

// Files
import '../style/App.css';
import LoginModal from './LoginModal'
import Banner from './Banner'
import SnackList from './SnackList'
import CardModal from './CardModal'
import { request } from "../helper/helper";

// Component
class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      snacks: [],
      cardShow: false,
      currSnack: {},
      currReviews:[],
      addReview: false,
      editReview: false,
      show: false,
      reviewForEdit: 0
    }
  }

  updateState = () => {
    request(`/snacks`)
    .then(response =>{
      this.setState({snacks: response.data.data})
    })
  }

  // Review Modal Methods  //
  handleCardShow = (id) => {
    this.setState({
      cardShow: true,
      editReview: false,
     })
    this.updateCurrSnackState(id)
  }

  handleCardClose = () => {
    this.setState({ cardShow: false })
  }

  // New Review Form
  handleReviewFormShow = () => {
    this.setState({ addReview: true })
  }

  handleReviewFormClose = () => {
    this.setState({ addReview: false })
  }

  // Edit Review Form
  handleEditReviewFormShow = (reviewId) => {
    this.setState({
      editReview: true,
      reviewForEdit: reviewId
     })
  }

  handleEditReviewFormClose = () => {
    this.setState({ editReview: false })
  }

  updateCurrSnackState = async (id) => {
    // Snack Info
    request(`/snacks/${id}`)
    .then(response =>{
      this.setState({currSnack: response.data.data})
    })
    // Reviews
    request(`/snacks/${id}/reviews`)
    .then(response =>{
      this.setState({currReviews: response.data.data})
    })
  }

  handleSubmitNewReview = (event,id,usersId) => {
    const title = event.target.title.value
    const rating = event.target.rating.value
    const text = event.target.text.value
    request(`/snacks/${id}/reviews`, "post", {
      title,
      rating,
      text,
      usersId
    }).then(response =>{
      this.setState({ addReview: false })
      this.updateCurrSnackState(id)
    })
  };

  handleEditReview = (event, id, revId) => {
    const title = event.target.title.value
    const rating = event.target.rating.value
    const text = event.target.text.value
    request(`/snacks/${id}/reviews/${revId}`, "put", {
      title,
      rating,
      text
    }).then(response =>{
      this.setState({ editReview: false })
      this.updateCurrSnackState(id)
    })
  };

  handleDeleteReview = (snackId,reviewId) => {
    console.log(snackId, reviewId)
    request(`/snacks/${snackId}/reviews/${reviewId}`, "delete"
    ).then(response =>{
      this.updateCurrSnackState(snackId)
    })
  }




  // Login Modal Methods //
  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  //////////////////////
  // MOUNTING METHODS //
  //////////////////////
  componentWillMount = () => {
    this.updateState()
  }

  render() {
    return (
      <div className="App">
        <Banner handleShow={this.handleShow} />
        { this.state.show ? <LoginModal handleClose={this.handleClose}/> : null}
        <CardModal
          handleCardClose={this.handleCardClose}
          handleCardShow={this.handleCardShow}
          handleReviewFormShow={this.handleReviewFormShow}
          handleReviewFormClose={this.handleReviewFormClose}
          handleSubmitNewReview={this.handleSubmitNewReview}
          handleEditReviewFormShow={this.handleEditReviewFormShow}
          handleEditReviewFormClose={this.handleEditReviewFormClose}
          handleEditReview={this.handleEditReview}
          handleDeleteReview={this.handleDeleteReview}
          cardShow={this.state.cardShow}
          currSnack={this.state.currSnack}
          currReviews={this.state.currReviews}
          addReview={this.state.addReview}
          editReview={this.state.editReview}
          reviewForEdit={this.state.reviewForEdit}
        />
        <SnackList snackData={this.state.snacks} handleCardShow={this.handleCardShow} />
      </div>
    );
  }
}

export default App;
