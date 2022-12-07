import ReactDOM from 'react-dom';
import ExitButton from '../ExitButton';
import './style.scss';

interface IProps {
    children: JSX.Element[] | JSX.Element | string | number;
    is_open: boolean;
    onExitClick?: () => void;
}

export default function ModalWindow({
    children,
    is_open,
    onExitClick
}: IProps) {
    return ReactDOM.createPortal(
        <div className={'modal--window ' + (is_open ? 'show' : 'hide')}>
            <div className="modal--window__body">
                <div className="modal--window__exit-btn">
                    <ExitButton onClick={onExitClick} />
                </div>
                <div className="modal--window__content">{children}</div>
            </div>
        </div>,
        document.body
    );
}
