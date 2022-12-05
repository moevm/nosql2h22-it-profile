import './style.scss';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Avatar, Button, Header, Menu } from '@components';
import SplitScreen from '../SplitScreen';

export default function LoginLayout() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <Header className="position--fixed">
                <Header.Left>
                    <h1>Portfolio</h1>
                </Header.Left>
                <Header.Right>
                    <div>
                        <Button
                            type="button"
                            onClick={() => navigate('/sign-up')}>
                            Sign Up
                        </Button>
                    </div>
                </Header.Right>
            </Header>
            <SplitScreen>
                <SplitScreen.LeftSide>
                    <div
                        style={{
                            backgroundColor: 'darkgray',
                            width: '100%',
                            height: '100%'
                        }}></div>
                </SplitScreen.LeftSide>
                <SplitScreen.RightSide>
                    <Outlet />
                </SplitScreen.RightSide>
            </SplitScreen>
        </div>
    );
}
