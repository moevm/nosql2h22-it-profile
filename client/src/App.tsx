import { Route, Routes } from 'react-router-dom';
import './App.scss';
import {
    HomePageLazy,
    LoginPage,
    RegisterPageLazy,
    AddExperiencePage,
    SearchPage,
    ViewProfilePage,
    ProfilePage
} from '@pages';
import HomeLayout from './shared/layout/HomeLayout';
import { Suspense } from 'react';
import { RegLayout } from './shared/layout';
import LoginLayout from './shared/layout/LoginLayout';
import EditProfile from './pages/EditProfile';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <HomePageLazy />
                            </Suspense>
                        }
                    />
                    <Route path="/stats" element={<div />} />
                    <Route path="/view">
                        <Route path=":userId" element={<ViewProfilePage />} />
                    </Route>
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route
                        path="/add-experience"
                        element={<AddExperiencePage />}
                    />
                    <Route path="/profile" element={<div />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                    <Route path="/favorites" element={<div />} />
                </Route>
                <Route path="/sign-in" element={<LoginLayout />}>
                    <Route index element={<LoginPage />} />
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
        </>
    );
}

export default App;
