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

   

    const blockUser = (name, email) => {
        const blockedUser = {
            blockedName: name,
            blockedEmail: email,
            email: loggedInUser.email,
        }
        const url = 'http://localhost:5050/block/blocks'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blockedUser)
        })
            .then(res => {

                console.log(res);
            })

    }

    const testBlock = bEmail => {
        const email = loggedInUser.email
        console.log("object", email);
        const bb = {
            bEmail: bEmail
        }
        fetch(`http://localhost:5050/auth/add-block/${email}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bb)
        }).then(res => {
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
                <Button onClick={() => blockUser(profile.name, profile.email)}> Block </Button>
                <Button onClick={() => testBlock(profile.email)}> Block Ok</Button>
            </div>
        </Col>
    );
};

export default Users;