import Button from '../../shared/components/Button';
import EmailInput from '../../shared/components/Form/EmailInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';

import './style.scss';

export default function RegisterPage() {
    return (
        <div className="register">
            <div className="register--wrapper">
                <div>
                    <strong>Step 01</strong>
                    <span className="disabled">/02</span>
                    <h1 className="register__header">Registration</h1>
                </div>
                <form action="" className="register__form">
                    <EmailInput title={'Email'} name={'email'} />
                    <PasswordInput title={'Password'} name={'password'} />
                    <PasswordInput
                        title={'Re-Password'}
                        name={'re-password'}
                        placeholder={'Please re-enter your password...'}
                    />
                    <div className="flex gap-4px">
                        <Button variant="primary">Help ?</Button>
                        <Button> Next </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
