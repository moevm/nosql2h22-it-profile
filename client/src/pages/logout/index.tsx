import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../shared/context/AuthContext';

export default function logOut(): JSX.Element {
    const { setIsAuthorized } = useContext(AuthContext);

    useEffect(() => {
        window.localStorage.removeItem('access_token');
        setIsAuthorized(false);
    }, []);

    return <></>;
}
