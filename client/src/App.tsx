import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePageLazy } from '@pages';
import Layout from './shared/layout';
import { Suspense } from 'react';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <HomePageLazy />
                        </Suspense>
                    }
                />
            </Route>
        </Routes>
    );
}

export default App;
