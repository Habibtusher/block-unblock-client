import React, { useContext } from 'react';
import { UserContext } from './../App';
import Login from './../Login/Login';
import BlockList from './../BlockList/BlockList';
import AllUser from './../AllUser/AllUser';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';

const Home = () => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log("logged home", loggedInUser);
    const handleBlock = () => {
       
        history.push("/blockList")
    }

    const getDecodedUser = () => {
        const user = localStorage.getItem('user');
        const userData = JSON.parse(user)
        if (!user) {
            return {};
        }
        return (userData);
    }
    const data = getDecodedUser();
    return (
        <div>
            {
                loggedInUser.email || data.email?
                    <div className="container mt-5">
                        <div style={{ padding: "20px" }}>
                            <button onClick={handleBlock} style={{ padding: "10px" }} className="btn btn-info">View Block List</button>
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