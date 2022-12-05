import React, { MouseEvent, useEffect } from 'react';
import './style.scss';

export default function Header({
    children,
    className
}: {
    children: JSX.Element[] | JSX.Element;
    className: string;
}) {
    useEffect(() => {
        const menu_btns = document.querySelectorAll<HTMLLinkElement>(
            '.header__item--link'
        );

        function toggleActive(e: MouseEvent<HTMLLinkElement>) {
            menu_btns.forEach((el) => el.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }

        menu_btns.forEach((a: HTMLLinkElement) => {
            a.addEventListener('click', toggleActive as any);
        });

        return () => {
            menu_btns.forEach((a) =>
                a.removeEventListener('click', toggleActive as any)
            );
        };
    }, []);

    return <div className={className + ' header'}>{children}</div>;
}

Header.Left = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
    <div className="header__left--layout">{children}</div>
);

Header.Center = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
    <div className="header__center--layout">{children}</div>
);

Header.Right = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
    <div className="header__right--layout">{children}</div>
);
