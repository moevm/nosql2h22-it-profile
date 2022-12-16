import HomePageContent from './components/Main';
import { useCheckServer } from './hooks/useCheckServer';
import './styles/index.scss';
import TextInput from '../../shared/components/Form/TextInput';
import PasswordInput from '../../shared/components/Form/PasswordInput';
import EmailInput from '../../shared/components/Form/EmailInput';
import DateInput from '../../shared/components/Form/DateInput';
import TextArea from '../../shared/components/Form/TextArea';
import GenderToggle from '../../shared/components/Form/GenderToggle';
import { useState } from 'react';
import {
    Avatar,
    Button,
    Chips,
    ExperienceCard,
    Header,
    Menu,
    MultiSelect,
    UserCard
} from '@components';
import ModalWindow from '../../shared/components/ModalWindow';
import List from '../../shared/components/List';

export default function HomePage() {
    // const { serverIsConnected } = useCheckServer();

    // const [openMenu, setOpenMenu] = useState(false);

    const items = ['C', 'C++', 'Python', 'Java', 'JavaScript', 'Kotlin', 'ASM'];
    const [chips, setChips] = useState<string[]>([
        'React',
        'C++',
        'Vue',
        'Python',
        'JavaScript',
        'Git',
        'figma'
    ]);

    function removeChip(value: string) {
        setChips((prev) => prev.filter((curr) => curr !== value));
    }

    const [modalState, setModalState] = useState(false);

    return (
        <>
            <div className="content--wrapper"></div>
            {/*
            <div style={{ width: 400, height: 100 }}>
                <TextInput
                    title="title"
                    name="name"
                    error={{ message: 'error' }}
                />
            </div>
            <div style={{ width: 400 }}>
                <TextArea title="Description" name="name" />
            </div>
            <div style={{ width: 400, height: 100 }}>
                <DateInput title="Date" name="name" />
            </div>
            <div style={{ width: 200 }}>
                <GenderToggle/>
            </div> */}

            {/* <div style={{display: 'flex'}}>
                <Chip variant='primary' title='React'/>
                <Chip variant='secondary' title='C++'/>
                <Chip variant='secondary' title='и'/>
            <div
                style={{
                    width: 300
                }}>
                <Chips
                    values={chips}
                    onRemove={removeChip}
                    closable
                    // direction="vertical"
                    variant="primary"
                />
            </div> */}

            {/* <div
                style={{ width: 35, height: 35, cursor: 'pointer' }}
                onClick={() => setOpenMenu((cur) => !cur)}>
                <Avatar />
            </div>
            <div style={{ position: 'relative' }}>
                <Menu open={openMenu}>
                    <Menu.Body>
                        <Menu.MenuItemGroup>
                            <Menu.MenuItem to={'/'}>Profile</Menu.MenuItem>
                            <Menu.MenuItem to={'/'}>Edit Profile</Menu.MenuItem>
                            <Menu.MenuItem to={'/'}>Favorites</Menu.MenuItem>
                        </Menu.MenuItemGroup>
                    </Menu.Body>
                    <Menu.Footer>
                        <Menu.MenuItem to={'/'}>Sign Out</Menu.MenuItem>
                    </Menu.Footer>
                </Menu>
            </div>  
            
            <MultiSelect title="LANGUAGE" items={items} />

            <div style={{ width: 500 }}>
                <ExperienceCard
                    title="Project title"
                    position="Junior Frontend"
                    period="2020-2022"
                    description={description}
                    techStack={['TypeScript', 'React', 'Redux', 'CSS']}
                    links={[
                        { to: '/', title: 'Link 1' },
                        { to: '/', title: 'Link 2' }
                    ]}
                />
            </div>

          */}

            <footer></footer>
        </>
    );
}
