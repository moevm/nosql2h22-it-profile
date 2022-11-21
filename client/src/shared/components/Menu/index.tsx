import { Link } from 'react-router-dom';
import './style.scss';

interface IMenuProps {
    children?: JSX.Element[] | JSX.Element;
    open?: boolean;
}

interface IMenuItemProps {
    children?: JSX.Element[] | JSX.Element | string | number;
    to: string;
}

function Menu({ children, open }: IMenuProps): JSX.Element {
    return (
        <>
            <div className={'menu ' + (open ? 'menu_open' : '')}>
                {children}
            </div>
        </>
    );
}

Menu.Footer = ({ children }: Pick<IMenuProps, 'children'>) => (
    <div className="menu__footer">{children}</div>
);

Menu.Body = ({ children }: Pick<IMenuProps, 'children'>) => (
    <div className="menu__body">{children}</div>
);

Menu.Header = ({ children }: Pick<IMenuProps, 'children'>) => (
    <div className="menu__Header">{children}</div>
);

Menu.MenuItem = ({ children, to }: IMenuItemProps) => (
    <div className="menu__item">
        <Link to={to}>{children}</Link>
    </div>
);

Menu.MenuItemGroup = ({ children }: Pick<IMenuProps, 'children'>) => (
    <div className="menu__item--group">{children}</div>
);

export default Menu;
