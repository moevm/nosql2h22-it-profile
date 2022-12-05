import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Avatar, Button, Header, Menu } from '@components';
import SplitScreen from '../SplitScreen';
import './style.scss';

export default function RegLayout() {
    const navigate = useNavigate();

    return (
        <>
            <Header className="position--fixed">
                <Header.Left>
                    <h1>Portfolio</h1>
                </Header.Left>
                <Header.Right>
                    <div>
                        <Button
                            type="button"
                            onClick={() => navigate('/sign-in')}>
                            Sign in
                        </Button>
                    </div>
                </Header.Right>
            </Header>
            <SplitScreen>
                <SplitScreen.LeftSide>
                    <Outlet />
                </SplitScreen.LeftSide>
                <SplitScreen.RightSide>
                    <div
                        style={{
                            backgroundColor: 'darkgray',
                            width: '100%',
                            height: '100%'
                        }}></div>
                </SplitScreen.RightSide>
            </SplitScreen>
        </>
    );
}
