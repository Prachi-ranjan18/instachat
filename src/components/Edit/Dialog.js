import React, { Component } from 'react'
import {Modal,Button,Row,Col,Form} from 'react-bootstrap'
class Dialog extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={

    //     }
    // }
    render() {
        return (
            <Modal
            // {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Change Profile Photo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Centered Modal</h4>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="None" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
      
        )
    }
}

export default Dialog
