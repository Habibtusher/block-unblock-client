import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import List from './List';
import { useHistory } from 'react-router-dom';
const BlockList = () => {
    const history = useHistory()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [block, setBlock] = useState([]);

    const getDecodedUser = () => {
        const user = localStorage.getItem('user');
        const userData = JSON.parse(user)
        if (!user) {
            return {};
        }
        return (userData);
    }
    const data = getDecodedUser();
  
    !loggedInUser.email ? setLoggedInUser(data) : console.log("object");

    const email = loggedInUser.email;
    console.log("from block",loggedInUser.email);
    useEffect(() => {
        fetch(`http://localhost:5050/block/block-list/${email}`)
            .then(res => res.json())
            .then(data => setBlock(data))
    }, [email])
    console.log(block);
    return (
        <div className="container mt-5">
            <button onClick={()=>history.push("/")}>Home</button>
            <h2 className="text-center ">Block List</h2>
            <div className="row">
                {
                    block.length &&
                    block.map(blo => <List blo={blo}></List>)
                }
            </div>
        </div>
    );
};

export default BlockList;