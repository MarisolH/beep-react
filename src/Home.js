import React, { Component } from 'react';
import { Grid, Row,Col, Button } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

class Home extends Component {
    state = {
        toDashboard: false,
      }
      handleSubmit () {
        BrowserRouter.push('/Yourname');
      }
    render() {
        
        return (
            <div>
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} md={8}>
                    <p className="title">Beeper ipsum dolor sit amet</p>
                    <p className="subtitle"> Suspendisse suscipit tincidunt metus, nec auctor lacus interdum quis. </p>
                    <Button className="btn" onClick={this.props.navigation.push()}>Comenzar</Button>
                    </Col>
                </Row>
            </Grid>
            </div>
        );
    }
}

export default Home;

