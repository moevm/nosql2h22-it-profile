import { lazy } from 'react';
import HomePage from './home';
import RegisterPage from './register';
import LoginPage from './login';

const HomePageLazy = lazy(() => import('./home'));
const RegisterPageLazy = lazy(() => import('./register'));
const LoginPageLazy = lazy(() => import('./login'));

export {
    HomePage,
    HomePageLazy,
    RegisterPage,
    RegisterPageLazy,
    LoginPage,
    LoginPageLazy
};
