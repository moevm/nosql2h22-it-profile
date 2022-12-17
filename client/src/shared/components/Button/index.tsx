import './style.scss';

interface IProps {
    children: JSX.Element | String;
    type?: 'submit' | 'button' | 'reset';
    variant?: 'primary' | 'secondary';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onSubmit?: React.FormEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export default function Button({
    children,
    type = 'button',
    variant = 'secondary',
    onClick,
    onSubmit,
    disabled = false
}: IProps): JSX.Element {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
            className={'button ' + variant + (disabled ? ' disabled' : '')}>
            {children}
        </button>
    );
}
