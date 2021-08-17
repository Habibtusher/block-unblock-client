import React from 'react';
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
        <div className="col-md-4 g-5">
            <div className="shadow-lg p-4">
                <h3>{blo.blockedName}</h3>
                <h6>{blo.blockedEmail}</h6>
                <div className="d-flex mt-4">
                <button className="btn btn-info" onClick={()=>handleUnblock(blo._id)}>Unblock</button>
                <button style={{marginLeft:"50px"}}  className="btn btn-info">Unblock All</button>
                </div>
               
            </div>
        </div>
    );
};

export default List;