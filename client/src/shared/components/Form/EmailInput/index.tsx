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

export default function EmailInput({
    title,
    name,
    onChange = () => {},
    defaultValue = '',
    placeholder = 'Enter your email...',
    error
}: IProps) {
    const [errorMessage, setErrorMessage] = useState('');

    const checkValidEmail = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.value.length) {
            setErrorMessage('');
            return;
        }

        const validRegex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (event.target.value.match(validRegex)) {
            setErrorMessage('');
        } else {
            setErrorMessage('Email incorrect');
        }
    };

    return (
        <Field
            title={title}
            error={error ?? { message: errorMessage }}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type="email"
            onChange={(event) => {
                checkValidEmail(event);
                onChange(event);
            }}
        />
    );
}
