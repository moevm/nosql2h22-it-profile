import { AddButton, ModalWindow } from '@components';
import './style.scss';

interface IProps {
    children: JSX.Element;
    title: string;
    state: boolean;
    changeState: (v: boolean) => void;
}

export default function MenuList({
    children,
    title,
    state,
    changeState
}: IProps) {
    return (
        <div className="menu--list">
            <div className="menu--list__head">
                <div className="menu--list--bold--text">{title}</div>
                <div>
                    <AddButton onClick={() => changeState(true)} />
                </div>
                <ModalWindow
                    is_open={state}
                    onExitClick={() => changeState(false)}>
                    {children}
                </ModalWindow>
            </div>
        </div>
    );
}
