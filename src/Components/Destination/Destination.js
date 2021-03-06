import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import map from '../../images/Map.png';

const Destination = (props) => {
    console.log(props);
    return (
        <div className="d-flex">
            <div style={{width: '200px' ,marginLeft:"150px",marginTop:"150px"}}>
                <Form>
                    <Form.Group controlId="formBasicStart">
                        <Form.Label>Pick Form</Form.Label>
                        <Form.Control type="text" name="startForm" placeholder="Form" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEnd">
                        <Form.Label>Pick To</Form.Label>
                        <Form.Control type="text" name="journyEnd" placeholder="Destination" />
                    </Form.Group>
                    {/* <Button onClick={handleSearchButtonClick()} variant="primary" type="submit">
                        Search
                    </Button> */}
                    <Link to="/finalDestination">
                    <button  className="">Search</button>
                    </Link>
                </Form>
            </div>
            <div>
                <img style={{height: '600px', marginLeft:"200px" , marginTop:"50px"}}src={map} alt=""/>
            </div>
        </div>
    );
};   

export default Destination;