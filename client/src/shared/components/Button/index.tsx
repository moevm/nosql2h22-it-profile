import './style.scss';

interface IProps {
    children: JSX.Element | String;
    type?: 'submit' | 'button' | 'reset';
    variant?: 'primary' | 'secondary';
}

export default function Button({
    children,
    type = 'button',
    variant = 'secondary'
}: IProps): JSX.Element {
    return (
        <button type={type} className={'button ' + variant}>
            {children}
        </button>
    );
}
