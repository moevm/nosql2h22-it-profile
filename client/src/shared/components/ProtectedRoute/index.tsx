import { Navigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/sign-in',
    children
}: {
    isAllowed: boolean;
    children?: JSX.Element;
    redirectPath?: string;
}): JSX.Element => {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children ? children : <Outlet />;
};
