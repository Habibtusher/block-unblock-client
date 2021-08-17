import React, { useContext } from 'react';
import { UserContext } from '../App';
import img from "../avatar.svg"
import { swal } from 'sweetalert';
import { useHistory } from 'react-router-dom';
const Users = ({ profile }) => {
    const history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const blockUser = (name, email) => {

        console.log("block", name, loggedInUser.email);

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
    return (
        <div className="col-md-4 mt-3 g-5">
            <div className="shadow p-3 text-center">
                <img style={{ width: "100px" }} src={img} alt="" />
                <h3>{profile.name}</h3>
                <h5>{profile.email}</h5>
                <button onClick={() => blockUser(profile.name, profile.email)} className="btn btn-danger">Block</button>
            </div>
        </div>
    );
};

export default Users;