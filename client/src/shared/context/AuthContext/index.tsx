import React from 'react';

interface IAuthContext {
    isAuthorized: boolean;
    setIsAuthorized: (value: boolean) => void;
}

export const AuthContext = React.createContext<IAuthContext>({
    isAuthorized: false,
    setIsAuthorized: () => {}
});