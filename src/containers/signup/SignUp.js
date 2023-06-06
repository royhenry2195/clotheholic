import React, { useState } from 'react';
import "./SignUp.css"
import { post } from '../../utils/Api';
import { setToken } from '../../utils/tokenUtils';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('adarshbalika@gmail.com');
    const [password, setPassword] = useState('adarshbalika');
    const [rememberMe, setRememberMe] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSignUp = async () => {
        // Perform signUp logic here
        console.log('SignUp button clicked');
        try {
            const response = await post('/api/auth/signup', { email, password });
            setToken(response.encodedToken);
            localStorage.setItem("userDetails", response.foundUser)
            navigate('/')
        } catch (error) {
            // Handle error
        }
    };

    const handleCreateAccount = () => {
        // Navigate to create account page
        console.log('Create new account button clicked');
    };

    const handleForgotPassword = () => {
        // Navigate to forgot password page
        console.log('Forgot password link clicked');
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2 className="signup-title">SignUp</h2>
                <label className='input-label' htmlFor="email">Email address</label>
                <input
                    type="email"
                    placeholder="roy@neogcamp"
                    value={email}
                    onChange={handleEmailChange}
                />
                <label className='input-label' htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="**********"
                    security='*'
                    value={password}
                    onChange={handlePasswordChange}
                />
                <div className="remember-me">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={handleRememberMeChange}
                    />
                    <label htmlFor="rememberMe">I accept all Terms & Conditions</label>
                </div>
                <button className="signup-button" onClick={handleSignUp}>
                    Create New Account
                </button>
                <button className="create-account-button" onClick={handleCreateAccount}>
                    Already have an account
                </button>
            </div>
        </div>
    )
}
