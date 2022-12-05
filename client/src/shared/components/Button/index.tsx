import './style.scss';

interface IProps {
    children: JSX.Element | String;
    type?: 'submit' | 'button' | 'reset';
    variant?: 'primary' | 'secondary';
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({
    children,
    type = 'button',
    variant = 'secondary',
    onClick,
}: IProps): JSX.Element {
    return (
        <button onClick={onClick} type={type} className={'button ' + variant}>
            {children}
        </button>
    );
}
