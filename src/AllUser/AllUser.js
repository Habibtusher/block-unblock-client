import React, { useState, useEffect } from 'react';
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
       <div className="container">
            <div className="row">
            {
                user.map(profile => <Users profile={profile}></Users>)
            }
        </div>
       </div>
    );
};

export default AllUser;