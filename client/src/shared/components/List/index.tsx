import ExitButton from '../ExitButton';
import './style.scss';

interface IListProps {
    children?: JSX.Element[] | JSX.Element | string;
    title: string | JSX.Element;
}

export default function List({ children, title }: IListProps) {
    return (
        <div className="list">
            <div className="list__title">{title}</div>
            <span className="separator" />
            <div className="list__items">{children}</div>
        </div>
    );
}

interface IListItemProps {
    children?: JSX.Element[] | JSX.Element | string;
    toolElements?: JSX.Element[] | JSX.Element;
    onClickDelete?: (...arg: []) => void;
}

export function ListItem({
    children,
    toolElements,
    onClickDelete
}: IListItemProps) {
    const tools = toolElements;

    return (
        <div className="list__item">
            <div className="list__item--content">{children}</div>
            <div className="list__item--tools">{tools}</div>
        </div>
    );
}

List.Item = ListItem;
