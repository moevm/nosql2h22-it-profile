import Field from '../Field';

interface IProps {
    title: string;
    name: string;
    onChange?: () => void;
    defaultValue?: string;
    placeholder?: string;
    error?: { message: string };
}

export default function DateInput({
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
            error={error}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            type="date"
            onChange={onChange}
        />
    );
}
