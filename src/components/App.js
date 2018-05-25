// Modules
import React, { Component } from 'react';
import axios from 'axios'

// Files
import '../App.css';
import LoginModal from './LoginModal'
import Banner from './Banner'
import SnackList from './SnackList'
import CardModal from './CardModal'

// const snacks =
//   [
//     {
//         "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
//         "id": 1,
//         "img": "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=edefdcf46c20585719c55c6377816072",
//         "is_perishable": false,
//         "name": "Soup - Campbells Beef Noodle",
//         "price": 26.37
//     },
//     {
//         "description": "Fusce posuere felis sed lacus.",
//         "id": 2,
//         "img": "https://images.unsplash.com/photo-1457609171594-20fa2108dc41?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=adeb51e4f23f6d671af282534b72c08c",
//         "is_perishable": false,
//         "name": "Pie Filling - Cherry",
//         "price": 3.16
//     },
//   ]

class App extends Component {

  constructor(props){
    super(props)

    this.state ={
      snacks: [],
      show: false,
      cardShow: false
    }
  }


  updateState = async () => {
    //Async and await so we can setState AFTER we get the data
    const getAllSnacksResponse = await axios.get('http://localhost:3000/snacks')
    this.setState({ snacks: getAllSnacksResponse.data.data })
  }

  handleCardShow = () => {
    this.setState({ cardShow: true })
  }

  handleCardClose = () => {
    this.setState({ cardShow: false })
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    console.log('heyo')
    this.setState({ show: true });
  }

  //////////////////////
  // MOUNTING METHODS //
  //////////////////////
  componentWillMount = () => {
    this.updateState()
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Banner handleShow={this.handleShow} />
        {/* <SnackList /> */}
        <LoginModal handleClose={this.handleClose} handleShow={this.handleShow} show={this.state.show}/>
        <CardModal handleCardClose={this.handleCardClose} handleCardShow={this.handleCardShow} cardShow={this.state.cardShow} />
        <SnackList snackData={this.state.snacks} handleCardShow={this.handleCardShow} />
      </div>
    );
  }
}

export default App;
