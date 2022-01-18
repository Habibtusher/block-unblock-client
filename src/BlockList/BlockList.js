import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import List from './List';
import { useHistory } from 'react-router-dom';
import { Button, Container, Row } from 'react-bootstrap';
const BlockList = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [block, setBlock] = useState({});
    const bbb = block?.blockList;
    const email = loggedInUser.email;
    console.log("logged in users email", email);
    useEffect(() => {
        fetch(`http://localhost:5050/auth/all-block/${email}`)
            .then(res => res.json())
            .then(data => setBlock(data[0]))
    }, [email])

    return (
        <Container className="mt-5">
            <Button onClick={() => history.push("/")}>Home</Button>
            <h2 className="text-center ">Block List</h2>
            <Row>

                {
                    bbb?.map(blo => <List blo={blo}></List>)
                }
            </Row>
        </Container>
    );
};

export default BlockList;