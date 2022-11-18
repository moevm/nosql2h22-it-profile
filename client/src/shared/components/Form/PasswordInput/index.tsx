import { ChangeEvent, useState } from 'react';
import Field from '../Field';

interface IProps {
    title: string;
    name: string;
    onChange?: (argv: any) => void;
    defaultValue?: string;
    placeholder?: string;
    error?: { message: string };
}

export default function PasswordInput({
    title,
    name,
    onChange = () => {},
    defaultValue = '',
    placeholder = 'Enter your password',
    error
}: IProps) {
    const [errorMessage, setErrorMessage] = useState('');

    const checkValidPassword = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.length) {
            setErrorMessage('');
            return;
        }

        if (event.target.value.length < 8) {
            setErrorMessage('Password must contain at least 8 characters');
        } else {
            setErrorMessage('');
        }
    };

    return (
        <Field
            title={title}
            error={error ?? { message: errorMessage }}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type="password"
            onChange={(event) => {
                checkValidPassword(event);
                onChange(event);
            }}
        />
    );
}
