import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import '../Banner.css'

const Banner = ({ handleShow }) => {
    return (
        <Jumbotron className='banner container-fluid'>
            <h1 className='banner-title'>ShiKai Snacks</h1>
            
            <p>
                <Button className='login-modal-button' bsStyle="primary" bsSize="large" onClick={handleShow}>
                    Login
                </Button>
            </p>
        </Jumbotron>
    )
}

export default Banner
