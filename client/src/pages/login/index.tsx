import Button from '../../shared/components/Button';
import EmailInput from '../../shared/components/Form/EmailInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';
import './style.scss';

export default function LoginPage() {
    return (
        <div className="login">
            <div className="login--wrapper">
                <div>
                    <h1 className="login__header">Login</h1>
                </div>
                <form action="" className="login__form">
                    <EmailInput title={'Email'} name={'email'} />
                    <PasswordInput title={'Password'} name={'password'} />
                    <Button> Login </Button>
                </form>
            </div>
        </div>
    );
}
