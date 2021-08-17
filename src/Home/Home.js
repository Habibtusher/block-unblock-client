import React, { useContext } from 'react';
import { UserContext } from './../App';
import Login from './../Login/Login';
import BlockList from './../BlockList/BlockList';
import AllUser from './../AllUser/AllUser';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const Home = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBlock = () => {

        history.push("/blockList")
    }
 
    return (
        <div>
            {
                loggedInUser.email ?
                    <div className="container mt-5">
                        <div style={{ padding: "20px" }}>
                            <Button onClick={handleBlock} style={{ padding: "10px" }} className="btn btn-info">View Block List</Button>
                        </div>
                        <AllUser />
                    </div>
                    :
                    <div>
                        <Login />
                    </div>
            }
        </div>
    );
};

export default Home;