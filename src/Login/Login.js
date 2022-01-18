import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import "./Login.css"
import avatar from '../avatar.svg'
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import "firebase/auth";
import swal from 'sweetalert';
import { UserContext } from './../App';
import firebaseConfig from './firebase.Config';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [checkEmail, setCheckEmail] = useState("")
    const history = useHistory()
    // const location = useLocation()
    // let { from } = location.state || { from: { pathname: "/" } };
    const loading = toast.loading('Adding...Please wait!');

    const setUserInfo = (props) => {
        return localStorage.setItem('user', JSON.stringify(props))
    }



    const loginForm = () => {

        const logindata = {
            email: email,
            password: password
        }
        const url = 'http://localhost:5050/auth/login'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(logindata)
        })
            .then(res => res.json())
            .then(data => {

                if (data === 'No user found') {
                    return swal("No user found!", "Please try again.", "error", { dangerMode: true });
                }
                if (data === 'Invalid password') {
                    return swal("Invaild Password!", "Please try again.", "error", { dangerMode: true });
                }
                if (data) {
                    toast.dismiss(loading);
                    // setUserToken(data)
                    // console.log(data);
                    setLoggedInUser(data);
                    setUserInfo(data)
                    console.log("form",loggedInUser);
                    history.push("/")
                    return swal(`Successfully Log In`, `Welcome`, "success")
                    // .then(res => history.push(from));
                }

            })
    }

    //email login
    var provider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
            .then((res) => {

                const { displayName, email, } = res.user;
                setCheckEmail(email);

                const signedInUser = {
                    username: displayName,
                    email: email,
                    password: "",
                    name: displayName
                }
                // console.log(signedInUser);

                const url = 'http://localhost:5050/auth/register'
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'Application/json'
                    },
                    body: JSON.stringify(signedInUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        const newU = {
                            blockList:data.blockList,
                            email: data.email,
                            name: data.name,
                            username: data.username
                        }
                        setLoggedInUser(newU);
                        setUserInfo(newU)
                        console.log("after log in",loggedInUser);
                        history.push("/")
                    })

            })
            .catch((err) => {
                console.log(err);
                console.log(err.message);
            })


    }
    //facebook login
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn=()=>{
        firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        var accessToken = credential.accessToken;

      console.log("fb use",user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log("error",errorMessage);

        // ...
      });
    }

    return (
        <div className="main-container">
            <div className="container">
                <div className="row loginContainer">
                    <div className="form login-form col-md-6">
                        <div>
                            <img className="avatar" src={avatar} alt="" />
                            <h5 className=" p-2">Email</h5>
                            <input onChange={(e) => setEmail(e.target.value)} className="form-control " type="text" />
                        </div>
                        <div className="mt-2">
                            <h5 className=" p-2">Password</h5>
                            <input onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" />
                        </div>
                        <div className="mt-4">
                            <Link className="a" to="/">Forget Password</Link>
                            <Link className="a" to="/register">Sign Up</Link>
                        </div>
                        <Button className="btn mt-4 loginBtn" style={{ width: "305px" }} onClick={loginForm}>Login</Button>
                        <h6 className="mt-3 text-center">Continue with ?</h6>
                        <div className="d-flex mt-3 social" >
                            <Button className="btn" onClick={handleFbSignIn}> Facebook</Button>
                           
                            <Button style={{ marginLeft: "10px" }} onClick={handleGoogleSignIn} className="btn"> Google</Button>
                            <Button style={{ marginLeft: "10px" }} className="btn"> LinkedIn</Button>
                        </div>
                    </div>
                    <div className="col-md-6">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;