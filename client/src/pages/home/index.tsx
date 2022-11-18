import HomePageHeader from './components/Header';
import HomePageContent from './components/Main';
import { useCheckServer } from './hooks/useCheckServer';
import './styles/index.scss';
import SubmitButton from '../../shared/components/Form/SubmitButton';
import TextInput from '../../shared/components/Form/TextInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';
import EmailInput from '../../shared/components/Form/EmailInput';
import DateInput from '../../shared/components/Form/DateInput';
import TextArea from '../../shared/components/Form/TextArea';
import Avatar from '../../shared/components/Form/Avatar';
import GenderToggle from '../../shared/components/Form/GenderToggle';

export default function HomePage() {
    const { serverIsConnected } = useCheckServer();

    return (
        <>
            <HomePageHeader />
            <HomePageContent>
                <>
                    <div>
                        <h1>
                            {serverIsConnected
                                ? 'Сервер подключен'
                                : 'Нет соединения'}
                        </h1>
                    </div>
                </>
            </HomePageContent>
            <div style={{ width: 200, height: 100 }}>
                <SubmitButton variant="primary">BUTTON</SubmitButton>
            </div>
            <div style={{ width: 400, height: 100 }}>
                <TextInput
                    title="title"
                    name="name"
                    error={{ message: 'error' }}
                />
            </div>
            <div style={{ width: 400 }}>
                <PasswordInput title="Password" name="name" />
            </div>
            <div style={{ width: 400 }}>
                <EmailInput title="Email" name="name" onChange={console.log} />
            </div>
            <div style={{ width: 400 }}>
                <TextArea title="Description" name="name" />
            </div>
            <div style={{ width: 400, height: 100 }}>
                <DateInput title="Date" name="name" />
            </div>
            <div style={{ width: 100, height: 100 }}>
                <Avatar />
            </div>
            <div style={{ width: 200 }}>
                <GenderToggle/>
            </div>
            <footer></footer>
        </>
    );
}
