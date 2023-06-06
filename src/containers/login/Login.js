import React, { useEffect, useState } from 'react';
import "./Login.css"
import { post } from '../../utils/Api';
import { useNavigate } from 'react-router-dom';
import { getToken, setToken } from '../../utils/tokenUtils';
import withAuthRedirect from '../../utils/withAuthRedirect';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('adarshbalika@gmail.com');
    const [password, setPassword] = useState('adarshbalika');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        // Check if a token is already stored
        const token = getToken();

        if (token) {
            // Redirect to the homepage or a protected route
            navigate('/');
        }
    }, []);


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleLogin = async () => {
        // Perform login logic here
        console.log('Login button clicked', email, password);
        try {
            const response = await post('/api/auth/login', { email, password });
            setToken(response.encodedToken);
            localStorage.setItem("userDetails", response.foundUser)
            navigate('/')
        } catch (error) {
            // Handle error
        }
    };

    const handleCreateAccount = () => {
        // Navigate to create account page
        navigate('/signup')
    };

    const handleForgotPassword = () => {
        // Navigate to forgot password page
        console.log('Forgot password link clicked');
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Login</h2>
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
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="forgot-password">
                    <a href="#" onClick={handleForgotPassword}>
                        Forgot password?
                    </a>
                </div>
                <button className="login-button" onClick={handleLogin}>
                    Login
                </button>
                <button className="create-account-button" onClick={handleCreateAccount}>
                    Create new account
                </button>
            </div>
        </div>
    )
}

export default withAuthRedirect(Login);
