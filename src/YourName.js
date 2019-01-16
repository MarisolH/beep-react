import React, { Component } from 'react';
import fire from './config/Fire';
import { Grid, Row,Col, ListGroup, ListGroupItem } from 'react-bootstrap';

class YourName extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      beeps: []
    };
    this.st = {
      name: []
    };
  }
   
  componentWillMount(){
      this.makeRemoteRequest(); 
       }
  
async makeRemoteRequest() {
  try {
    let events = [];
    var leadsRef = fire.database().ref('beep-react');
       leadsRef.on('child_added', (snapshot)=> { 
         //.on -> leer datos de una ruta de acceso y detectar los posibles cambios 
         let data = snapshot.val();
         let items = Object.values(data);
         let beeps = this.state.beeps.concat([items]);
         this.setState({beeps})
        
      });
      this.setState({events})
  } catch(e) {
      console.warn(e);
  }
}

  submit(e){
    e.preventDefault();
    this.input = document.getElementById('name').value;//obtiene el valor del input
      fire.database().ref('beep-react').push({//crea un nuevo registro en la bd
        name: this.input + ' hizo un beep!'
      });
      // let beeps = this.st.beeps.concat([this.input]);
      // this.setState({beeps});
    }
    
  render() { 
    return (
      <div>
        <Grid>
          <Row className="show-grid">
              <Col xs={12} md={8}>
              <p className="title">Dinos tu nombre</p>
                    <form id="form">
                        <div class="form-group">
                        <input id="name"></input>
                        </div>
                        <button onClick={this.submit} className="btn btn-success">HACER BEEP!</button>
                    </form>
                    <div>
                        <ul>
                        {this.state.beeps.map((beep)=>(
                          <div className="div-name">{beep}</div>
                        )).reverse()}
                        </ul>
                    </div>
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}
export default YourName;