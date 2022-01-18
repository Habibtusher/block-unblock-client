import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
// import avatar from '../../../avatar.svg'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Register = () => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const history = useHistory();

    const profileData = {
        username: userName,
        email: email,
        password: password,
        name: name
    }
    console.log(profileData);
    const loading = toast.loading('Adding...Please wait!');

    const signupForm = (e) => {

        const url = 'http://localhost:5050/auth/register'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(profileData)
        })
            .then(res => {
                if (res) {
                    toast.dismiss(loading);
                    // reset();
                    return swal(`Successfully Sign Up`, `Welcome`, "success").then(res => history.push('/login'));
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }


    return (
        
        <div className="main-container ">
            <div className="container">
                <div className="row loginContainer">
                    <div style={{ height: "580px" }} className="form login-form col-md-6">
                        <div>
                            <img className="avatar" src="" alt="" />
                            <h5 className=" p-2">UserName</h5>
                            <input onChange={(e) => setUserName(e.target.value)} className="form-control" type="text" />
                        </div>
                        <div>
                            <img className="avatar" src="" alt="" />
                            <h5 className=" p-2">Name</h5>
                            <input onChange={(e) => setName(e.target.value)} className="form-control " type="text" />
                        </div>
                        <div className="mt-2">
                            <h5 className=" p-2">Email</h5>
                            <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name='email' />
                        </div>
                        <div className="mt-2">
                            <h5 className=" p-2">Password</h5>
                            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
                        </div>

                        <div className="mt-4 d-flex">
                            <div >
                                <h5>Have an Account</h5>
                            </div>
                            <div style={{marginLeft:"50px"}}>
                                <Link style={{ paddingLeft: "20px", paddingRight: "20px" }} className="a" to="/login">Login</Link>
                            </div>

                        </div>
                        <button className="btn mt-4 loginBtn" style={{ width: "305px" }} onClick={signupForm}>Sign Up</button>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;