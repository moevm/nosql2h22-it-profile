import './style.scss';

interface IProps {
    title: string;
    name: string;
    type: string;
    onChange?: (argv: any) => void;
    defaultValue?: string;
    placeholder?: string;
    error?: { message: string };
}

export default function Field({
    title,
    name,
    type,
    onChange,
    defaultValue,
    placeholder,
    error
}: IProps) {
    return (
        <label className="text--field">
            <span className="text--field__title">{title}</span>
            <input
                name={name}
                className="text--field__input"
                type={type}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
            <span className="text--field__error">{error?.message ?? ''}</span>
        </label>
    );
}
