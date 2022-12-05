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
    MultiSelect
} from '@components';
import ModalWindow from '../../shared/components/ModalWindow';
import List from '../../shared/components/List';

export default function HomePage() {
    const { serverIsConnected } = useCheckServer();

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
            <div className="content--wrapper">
                <div>
                    <Button onClick={() => setModalState(true)}>
                        Show Modal
                    </Button>
                </div>

                <div style={{ width: 400 }}></div>
                <ModalWindow
                    is_open={modalState}
                    onExitClick={() => {
                        setModalState(false);
                    }}>
                    <List title="Test">
                        <List.Item>item</List.Item>
                        <List.Item>item 2</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                        <List.Item>item 3</List.Item>
                    </List>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: 4
                        }}>
                        <div style={{ flexBasis: '100%' }}>
                            <TextInput title={''} name={''} />
                        </div>
                        <div style={{ flexBasis: 'auto' }}>
                            <Button>Add</Button>
                        </div>
                    </div>
                </ModalWindow>
            </div>
            <footer></footer>
        </>
    );
}
