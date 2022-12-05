import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePageLazy, LoginPage, RegisterPageLazy, AddExperiencePage } from '@pages';
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
                <Route path="/add-experience" element={<HomeLayout />}>
                    <Route index element={<AddExperiencePage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
