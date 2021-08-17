import React, { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import Users from './Users';

const AllUser = () => {
    const [user, setUser] = useState([])
    const url = "http://localhost:5050/auth/allUser"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
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