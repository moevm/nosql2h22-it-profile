import '../Field/style.scss';

interface IProps {
    title: string;
    name: string;
    onChange?: (argv: any) => void;
    defaultValue?: string;
    placeholder?: string;
}

export default function TextArea({
    title,
    name,
    onChange,
    defaultValue,
    placeholder,
}: IProps) {
    return (
        <label className="text--field">
            <span className="text--field__title">{title}</span>
            <textarea
                name={name}
                className="text--field__textarea"
                placeholder={placeholder}
                defaultValue={defaultValue}
                onChange={onChange}
            />
        </label>
    );
}
