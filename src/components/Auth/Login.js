import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import { useStateValue } from '../../store/StateProvider';

import './Login.css';

export const Login = ({ }) => {
    const history = useHistory();

    const [{user}, dispatch] = useStateValue();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
        if (user) history.push('/');
    });
    
    const signIn = async (e) => {
        e.preventDefault();
        try {
            const authResponse = await auth.signInWithEmailAndPassword(email, password);
            if (authResponse)  history.push('/');                        
        } catch (err) {
            console.error(err);
            alert(err.message);
        }        
    }

    const register = async (e) => {
        e.preventDefault();
        try {
            const authResponse = await auth.createUserWithEmailAndPassword(email, password);
            if (authResponse) {
                // redirect user to home page
                history.push('/');
            }
        }
        catch (err) {
            console.error(err);
            const errorCode = err.code;
            if (errorCode === 'auth/weak-password') {
            alert('The password is too weak.');
            } else {
            alert(err.message);
            }
        }      
    }

    return (
        <div className="login">            
            <Link to="/">
            <img className="login__logo" src="https://i.insider.com/539f3ffbecad044276726c01?width=1100&format=jpeg&auto=webp" alt="logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <p>Email</p>
                    <input type="email" value={email} required
                        onChange={e => setEmail(e.target.value)}
                    />
                    
                    <p>Password</p>
                    <input type="password" value={password} required
                        onChange={e => setPassword(e.target.value)}
                    />
                    <br />
                    <button className="login__button signin" onClick={signIn}>Sign in</button>
                </form>
                <small>By signing in you aggreed to Ecommerce clone terms and conditions and privacy policy</small>

                <p>Don't have an account ?</p>
                <small>Enter your email and make your password in above fields and hit Sign up button below</small>

                <button className="login__button signup" onClick={register}>Sign up</button>

            </div>
            <h5>Design and Developed by <a href="https://devarsh19.github.io/" target="_blank">Devarsh Patel</a></h5>
        </div>
    );
}
