import React from 'react';
import { Button, Col } from 'react-bootstrap';
import swal from 'sweetalert';


const List = ({ blo }) => {
    
    const handleUnblock=id=>{
        console.log(id);
       
        fetch(`http://localhost:5050/block/unblock/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                swal("Successfully! unblocked","Refresh", { dangerMode: false });
                
            })
    }
    return (
        <Col md={4} className="g-5">
            <div className="shadow-lg p-4">
            <h1>{blo}</h1>
            <h4>dfg{blo.index}</h4>
            <div className="d-flex mt-4">
            {/* <Button className="btn btn-info" onClick={()=>handleUnblock(blo.index)}>Unblock</Button> */}
            <Button style={{marginLeft:"50px"}}  className="btn btn-info">Unblock All</Button>
            </div>
            </div>
        </Col>
    );
};

export default List;