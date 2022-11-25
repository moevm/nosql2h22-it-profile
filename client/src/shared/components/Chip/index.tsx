import { useState } from 'react';
import './style.scss';

interface IChipProps {
    variant: string;
    title: string;
    icon?: string;
    isClosable?: boolean;
    onDelete?: (value: string) => void;
}

export default function Chip({
    variant = 'primary',
    title,
    icon = '',
    isClosable = true,
    onDelete
}: IChipProps): JSX.Element {
    const [removed, setRemoved] = useState(false);

    function onRemove() {
        setRemoved(true);
        if (onDelete) {
            setTimeout(() => onDelete(title), 300);
        }
    }

    return (
        <div
            className={
                'chip ' +
                variant +
                ` ${isClosable ? 'chip_closable' : ''} ${
                    removed ? 'removed' : ''
                }`
            }>
            {icon && (
                <div className="chip__icon">
                    <img src={icon} />
                </div>
            )}
            <div className="chip__title">
                <span>{title}</span>
            </div>
            {isClosable && (
                <button className="chip__cls--btn" onClick={onRemove}>
                    &times;
                </button>
            )}
        </div>
    );
}
