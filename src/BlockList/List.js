import React from 'react';
import { Button, Col } from 'react-bootstrap';
import swal from 'sweetalert';


const List = (props) => {
    console.log(props);
    const handleUnblock=id=>{
        console.log(id);
       
 
    }
    return (
        <Col md={4} className="g-5">
            <div className="shadow-lg p-4">
            <h5>{props.blo.email}</h5>
            <div className="d-flex mt-4">
            {/* <Button className="btn btn-info" onClick={()=>handleUnblock(blo.index)}>Unblock</Button> */}
            <Button style={{marginLeft:"50px"}}  className="btn btn-info">Unblock</Button>
            </div>
            </div>
        </Col>
    );
};

export default List;