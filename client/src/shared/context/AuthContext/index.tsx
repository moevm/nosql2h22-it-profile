import React from 'react';

interface IAuthContext {
    isAuthorized: boolean;
    isAdmin: boolean;
    setIsAdmin: (value: boolean) => void;
    setIsAuthorized: (value: boolean) => void;
}

export const AuthContext = React.createContext<IAuthContext>({
    isAuthorized: false,
    isAdmin: false,
    setIsAdmin: () => {},
    setIsAuthorized: () => {}
});
