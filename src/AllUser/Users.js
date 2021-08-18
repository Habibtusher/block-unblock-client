import React, { useContext } from 'react';
import { UserContext } from '../App';
import img from "../avatar.svg"
import { swal } from 'sweetalert';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';
import { useEffect } from 'react';
const Users = ({ profile }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const testBlock = bEmail => {
        const email = loggedInUser.email
        const bb = {
            bEmail: bEmail
        }
        fetch(`http://localhost:5050/auth/add-block/${email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bb)
        })
        .then(res => {
        
            console.log("server");
        })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <Col md={4} className="g-5">
            <div className="shadow-lg p-3">
                <img style={{ width: "100px" }} src={img} alt="" />
                <h4>{profile.name}</h4>
                <h5>{profile.email}</h5>
              
                <Button onClick={() => testBlock(profile.email)}> Block</Button>
            </div>
        </Col>
    );
};

export default Users;