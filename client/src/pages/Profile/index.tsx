import Avatar from '../../shared/components/Form/Avatar';
import avatar from '../../asserts/avatar.jpg';
import './style.scss';
import { useState } from 'react';
import { AddButton, ExperienceCard } from '@components';
import MenuList from './components/MenuList';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
    const [specialityModal, setSpecialityModal] = useState(false);
    const [contactsModal, setContactsModal] = useState(false);
    const [educationModal, setEducationModal] = useState(false);
    const [skillsModal, setSkillsModal] = useState(false);
    const [languagesModal, setLanguagesModal] = useState(false);

    const navigate = useNavigate();

    return (
        <div className="profile--page">
            <div className="profile--page__menu">
                <div className="profile--page__menu--avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="profile--page__menu--bold--text">
                    Loykonen Mikhail
                </div>
                <div>
                    <div className="profile--page__menu--text">15.01.2001</div>
                    <div className="profile--page__menu--text">
                        St.Petersburg, Russia
                    </div>
                </div>
                <div className="profile--page__menu--times">
                    <div className="profile--page__menu--times--item">
                        <div>Created at:</div>
                        <div>10.12.2022</div>
                    </div>
                    <div className="profile--page__menu--times--item">
                        <div>Updated at:</div>
                        <div>11.12.2022</div>
                    </div>
                </div>
                <MenuList
                    title="SPECIALITY"
                    state={specialityModal}
                    changeState={setSpecialityModal}>
                    <h1>Speciality modal</h1>
                </MenuList>
                <MenuList
                    title="CONTACTS"
                    state={contactsModal}
                    changeState={setContactsModal}>
                    <h1>Contacts modal</h1>
                </MenuList>
                <MenuList
                    title="EDUCATION"
                    state={educationModal}
                    changeState={setEducationModal}>
                    <h1>Education modal</h1>
                </MenuList>
                <MenuList
                    title="SKILLS"
                    state={skillsModal}
                    changeState={setSkillsModal}>
                    <h1>Skills modal</h1>
                </MenuList>
                <MenuList
                    title="LANGUAGES"
                    state={languagesModal}
                    changeState={setLanguagesModal}>
                    <h1>Languages modal</h1>
                </MenuList>
            </div>

            <div className="profile--page__experiences">
                <div className="profile--page__experiences__head">
                    <div>EXPERIENCES</div>
                    <div>
                        <AddButton onClick={() => navigate('edit')} />
                    </div>
                </div>
                <div className='profile--page__experiences__item'>
                    <ExperienceCard
                        title="Google"
                        position="Senior Frontend"
                        period="2010 - 2020"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack={['React', 'Redux', 'TypeScript', 'SCSS']}
                    />
                </div>
                <div className='profile--page__experiences__item'>
                    <ExperienceCard
                        title="Google"
                        position="Senior Frontend"
                        period="2010 - 2020"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack={['React', 'Redux', 'TypeScript', 'SCSS']}
                    />
                </div>
                <div className='profile--page__experiences__item'>
                    <ExperienceCard
                        title="Google"
                        position="Senior Frontend"
                        period="2010 - 2020"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack={['React', 'Redux', 'TypeScript', 'SCSS']}
                    />
                </div>
                <div className='profile--page__experiences__item'>
                    <ExperienceCard
                        title="Google"
                        position="Senior Frontend"
                        period="2010 - 2020"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack={['React', 'Redux', 'TypeScript', 'SCSS']}
                    />
                </div>
                <div className='profile--page__experiences__item'>
                    <ExperienceCard
                        title="Google"
                        position="Senior Frontend"
                        period="2010 - 2020"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        techStack={['React', 'Redux', 'TypeScript', 'SCSS']}
                    />
                </div>
            </div>
        </div>
    );
}
