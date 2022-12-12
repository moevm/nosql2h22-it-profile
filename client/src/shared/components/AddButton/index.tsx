import './style.scss';

interface IProps {
    onClick?: (...arg: any) => void;
}

export default function AddButton({ onClick }: IProps) {
    return <span className="add--btn" onClick={onClick}>+</span>;
}
