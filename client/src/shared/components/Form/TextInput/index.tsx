import Field from '../Field';

interface IProps {
    title: string;
    name: string;
    onChange?: () => void;
    defaultValue?: string;
    placeholder?: string;
    error?: { message: string };
}

export default function TextInput({
    title,
    name,
    onChange,
    defaultValue = '',
    placeholder = 'text...',
    error
}: IProps) {
    return (
        <Field
            title={title}
            name={name}
            type="text"
            placeholder={placeholder}
            defaultValue={defaultValue}
            onChange={onChange}
            error={error}
        />
    );
}
