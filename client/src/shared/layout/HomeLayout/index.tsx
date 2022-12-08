import { Link, Outlet } from 'react-router-dom';
import { Avatar, Button, Header, Menu } from '@components';
import { useState } from 'react';

export default function HomeLayout() {
    let isAuth = true;
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div className="page">
            <Header className="">
                <Header.Left>
                    <h1>Portfolio</h1>
                </Header.Left>
                <Header.Center>
                    <Link to="/search" className="header__item--link">
                        SEARCH
                    </Link>
                    <Link to="/stats" className="header__item--link">
                        STATS
                    </Link>
                </Header.Center>
                <Header.Right>
                    {isAuth ? (
                        <div>
                            <div
                                style={{
                                    width: 35,
                                    height: 35,
                                    cursor: 'pointer'
                                }}
                                onClick={() => setOpenMenu((cur) => !cur)}>
                                <Avatar />
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Menu open={openMenu}>
                                    <Menu.Body>
                                        <Menu.MenuItemGroup>
                                            <Menu.MenuItem to={'/profile'}>
                                                Profile
                                            </Menu.MenuItem>
                                            <Menu.MenuItem to={'/edit-profile'}>
                                                Edit Profile
                                            </Menu.MenuItem>
                                            <Menu.MenuItem to={'/favorits'}>
                                                Favorites
                                            </Menu.MenuItem>
                                        </Menu.MenuItemGroup>
                                    </Menu.Body>
                                    <Menu.Footer>
                                        <Menu.MenuItem to={'/'}>
                                            Sign Out
                                        </Menu.MenuItem>
                                    </Menu.Footer>
                                </Menu>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Button type="button">Sign in</Button>
                        </div>
                    )}
                </Header.Right>
            </Header>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}
