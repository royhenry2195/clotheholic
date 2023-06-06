import React, { useEffect } from 'react';
import { getToken } from './tokenUtils';
import { useNavigate } from 'react-router-dom';

const withAuthRedirect = (WrappedComponent) => {
    const AuthRedirectComponent = (props) => {
        const navigate = useNavigate();

        useEffect(() => {
            const token = getToken();

            if (token) {
                // Redirect to the homepage or a protected route
                navigate('/');
            }
        }, [navigate]);

        if (getToken()) {
            return null; // Render nothing while checking the token
        }

        return <WrappedComponent {...props} />;
    };

    return AuthRedirectComponent;
};

export default withAuthRedirect;
