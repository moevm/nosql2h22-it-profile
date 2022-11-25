import './style.scss';

interface IChipProps {
    variant: string;
    title: string;
    icon?: string;
    isClosable?: boolean;
    onDelete?: (argv: any) => void;
}

export default function Chip({
    variant = 'primary',
    title,
    icon = '',
    isClosable = true,
    onDelete = (item) => {}
}: IChipProps): JSX.Element {
    return (
        <div className={'chip ' + variant}>
            {icon && (
                <div className="chip__icon">
                    <img src={icon} />
                </div>
            )}
            <div className="chip__title">
                <span>{title}</span>
            </div>
            {isClosable && (
                <div className="chip__cls--btn" onClick={() => onDelete(title)}>
                    &times;
                </div>
            )}
        </div>
    );
}