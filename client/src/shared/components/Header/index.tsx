import './style.scss';

export default function Header({children} : {children: JSX.Element[] | JSX.Element}) {
    return (
        <div className="header">
            {children}
        </div>
    );
}

Header.Left = ({children} : {children: JSX.Element[] | JSX.Element}) => (
    <div className='header__left--layout'>
        {children}
    </div>
)

Header.Center = ({children} : {children: JSX.Element[] | JSX.Element}) => (
    <div className='header__center--layout'>
        {children}
    </div>
)

Header.Right = ({children} : {children: JSX.Element[] | JSX.Element}) => (
    <div className='header__right--layout'>
        {children}
    </div>
)