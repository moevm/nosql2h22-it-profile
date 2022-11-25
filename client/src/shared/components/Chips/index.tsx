import { Chip } from '@components';
import './style.scss'

interface IChipsProps {
    values: string[];
    variant?: 'primary' | 'secondary';
    direction?: 'vertical' | 'horizontal';
    onRemove?: (v: string) => void;
    closable?: boolean;
}

export default function Chips({
    direction = 'horizontal',
    values,
    onRemove,
    variant = 'primary',
    closable = false
}: IChipsProps) {
    return (
        <div className={'chips ' + direction}>
            {values.map((value) => (
                <Chip
                    variant={variant}
                    title={value}
                    key={value}
                    onDelete={onRemove}
                    isClosable={closable}
                />
            ))}
        </div>
    );
}
