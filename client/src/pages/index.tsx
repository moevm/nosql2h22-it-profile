import { lazy } from 'react';
import HomePage from './home';
import RegisterPage from './register';
import LoginPage from './login';
import AddExperiencePage from './AddExperience';
import SearchPage from './Search';
import ViewProfilePage from './ViewProfile';
import ProfilePage from './Profile';

const HomePageLazy = lazy(() => import('./home'));
const RegisterPageLazy = lazy(() => import('./register'));
const LoginPageLazy = lazy(() => import('./login'));
// const AddExperiencePageLazy = lazy(() => import('./AddExperience'));

export {
    HomePage,
    HomePageLazy,
    RegisterPage,
    RegisterPageLazy,
    LoginPage,
    LoginPageLazy,
    AddExperiencePage,
    SearchPage,
    ViewProfilePage,
    ProfilePage
};
