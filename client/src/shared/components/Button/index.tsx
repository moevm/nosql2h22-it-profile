import './style.scss';

interface IProps {
    children: JSX.Element | String;
    type?: 'submit' | 'button' | 'reset';
    variant?: 'primary' | 'secondary';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onSubmit?: React.FormEventHandler<HTMLButtonElement>;
}

export default function Button({
    children,
    type = 'button',
    variant = 'secondary',
    onClick,
    onSubmit
}: IProps): JSX.Element {
    return (
        <button
            onClick={onClick}
            onSubmit={onSubmit}
            type={type}
            className={'button ' + variant}>
            {children}
        </button>
    );
}
