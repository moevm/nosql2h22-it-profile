import {
    useRef,
    MouseEventHandler,
    FormEventHandler,
    useContext,
    useEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPIs } from '../../shared/APIs';
import Button from '../../shared/components/Button';
import EmailInput from '../../shared/components/Form/EmailInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';
import { AuthContext } from '../../shared/context/AuthContext';
import './style.scss';

export default function LoginPage() {
    const from_ref = useRef<HTMLFormElement>(null);

    const navigate = useNavigate();

    const { setIsAuthorized, setIsAdmin } = useContext(AuthContext);

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = from_ref.current;

        if (form) {
            const form_data = new FormData(form);
            const data: Record<string, any> = {};

            for (const [key, val] of form_data.entries()) {
                data[key] = val;
            }

            authAPIs.signIn(data as any).then((res) => {
                window.localStorage.setItem('access_token', res.access);

                let jwtData = res.access.split('.')[1];
                let decodedJwtJsonData = window.atob(jwtData);
                let decodedJwtData = JSON.parse(decodedJwtJsonData);
                
                if (decodedJwtData.roles.includes('ADMIN')) {
                    setIsAdmin(true);
                }
                setIsAuthorized(true);
                navigate('/profile');
            });
        }
    };
    return (
        <div className="login">
            <div className="login--wrapper">
                <div>
                    <h1 className="login__header">Login</h1>
                </div>
                <form
                    onSubmit={(event) => {
                        onSubmit(event);
                        return false;
                    }}
                    ref={from_ref}
                    className="login__form">
                    <EmailInput title={'Email'} name={'email'} />
                    <PasswordInput title={'Password'} name={'password'} />
                    <Button type="submit">Login</Button>
                </form>
            </div>
        </div>
    );
}
