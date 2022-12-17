import { MouseEventHandler, useRef } from 'react';
import { authAPIs } from '../../shared/APIs';
import Button from '../../shared/components/Button';
import EmailInput from '../../shared/components/Form/EmailInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';

export default function LoginPage() {
    const from_ref = useRef<HTMLFormElement>(null);
    return (
        <form ref={from_ref}>
            <EmailInput name="email" title="Email" />
            <PasswordInput name="password" title="Password" />
            <Button type="submit" onClick={onSubmit}>
                Sing In
            </Button>
        </form>
    );
}
