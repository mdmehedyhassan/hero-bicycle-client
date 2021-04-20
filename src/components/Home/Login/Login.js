import React, { useContext, useState }  from 'react';
import Navbars from '../Navbars/Navbars';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(true);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignIn = () => {
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email };
                setLoggedInUser(signedInUser);
                history.replace(from)
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((res) => {
                const newUserInfo = { ...user };
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo)
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo)
            });
    }
    return (
        <div>
            <h2 className="text-center pt-5">Login With</h2>
            <div className="p-2 text-center ">
                <button onClick={handleSignIn} className="p-2 btn btn-outline-success rounded-pill"><FontAwesomeIcon icon={faGoogle} /> Continue with Google </button>
            </div>
            <h5 className="text-center">Don't have an account? <span className="text-danger">Create an account</span></h5>
        </div>
    );
};

export default Login;