import React, { useState, useEffect, useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../App';
import Users from './Users';

const AllUser = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email= loggedInUser.email;
    
    const [user, setUser] = useState([])
    const url = `http://localhost:5050/auth/allUser/${email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [user])
    return (
        <Container>
            <Row>
            {
                user.map(profile => <Users profile={profile}></Users>)
            }
            </Row>          
        </Container>
    );
};

export default AllUser;