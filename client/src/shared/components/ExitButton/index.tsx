import './style.scss';

interface IProps {
    onClick?: (...arg: []) => void;
    size?: 'normal' | 'big' | 'small';
}

export default function ExitButton({ onClick, size = 'normal' }: IProps) {
    return <span className={'exit--btn__' + size} onClick={onClick}></span>;
}
