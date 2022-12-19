import { Outlet, Route, Routes } from 'react-router-dom';
import './App.scss';
import {
    HomePageLazy,
    LoginPage,
    RegisterPageLazy,
    AddExperiencePage,
    SearchPage,
    ViewProfilePage,
    ProfilePage,
    AdminPage
} from '@pages';
import HomeLayout from './shared/layout/HomeLayout';
import { Suspense, useContext, useEffect, useState } from 'react';
import { RegLayout } from './shared/layout';
import LoginLayout from './shared/layout/LoginLayout';
import EditProfile from './pages/EditProfile';
import LogOut from './pages/logout';
import { AuthContext } from './shared/context/AuthContext';
import { ProtectedRoute } from './shared/components/ProtectedRoute';

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const [isAdmin, setIsAdmin] = useState(true);

    useEffect(() => {
        const token = window.localStorage.getItem('access_token');

        if (token) {
            setIsAuthorized(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{ isAuthorized, setIsAuthorized, isAdmin, setIsAdmin }}>
            <Routes>
                <Route
                    element={
                        <ProtectedRoute
                            isAllowed={isAuthorized}
                            redirectPath="/sign-in"
                        />
                    }>
                    <Route path="/" element={<HomeLayout />}>
                        <Route
                            index
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <HomePageLazy />
                                </Suspense>
                            }
                        />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route
                            path="/add-experience"
                            element={<AddExperiencePage />}
                        />
                        <Route path="/sign-out" element={<LogOut />} />

                        <Route path="/profile/edit" element={<EditProfile />} />
                        <Route path="/favorites" element={<div />} />
                    </Route>
                </Route>

                <Route
                    element={
                        <ProtectedRoute
                            isAllowed={isAdmin}
                            redirectPath="/sign-in"
                        />
                    }>
                    <Route path="/" element={<HomeLayout />}>
                        <Route path="/admin-page" element={<AdminPage />} />
                    </Route>
                </Route>

                <Route path="/" element={<HomeLayout />}>
                    <Route path="/stats" element={<div />} />
                    <Route path="/view">
                        <Route path=":userId" element={<ViewProfilePage />} />
                    </Route>
                    <Route path="/search" element={<SearchPage />} />
                </Route>

                <Route
                    element={
                        <ProtectedRoute
                            isAllowed={!isAuthorized}
                            redirectPath="/profile"
                        />
                    }>
                    <Route path="/sign-in" element={<LoginLayout />}>
                        <Route index element={<LoginPage />} />
                    </Route>
                </Route>
                <Route path="/sign-up" element={<RegLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <RegisterPageLazy />
                            </Suspense>
                        }
                    />
                </Route>
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
