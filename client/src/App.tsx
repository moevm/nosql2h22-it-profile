import { Route, Routes } from 'react-router-dom';
import './App.scss';
import {
    HomePageLazy,
    LoginPage,
    RegisterPageLazy,
    AddExperiencePage,
    SearchPage,
    ViewProfilePage
} from '@pages';
import HomeLayout from './shared/layout/HomeLayout';
import { Suspense } from 'react';
import { RegLayout } from './shared/layout';
import LoginLayout from './shared/layout/LoginLayout';

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
                    <Route path="/view" element={<ViewProfilePage />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route
                        path="/add-experience"
                        element={<AddExperiencePage />}
                    />
                    <Route path="/profile" element={<div />} />

                    <Route path="/edit-profile" element={<div />} />
                    <Route path="/favorits" element={<div />} />
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
