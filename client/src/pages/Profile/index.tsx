import Avatar from '../../shared/components/Form/Avatar';
import avatar from '../../asserts/avatar.jpg';
import './style.scss';
import { useEffect, useState } from 'react';
import { AddButton, ExperienceCard } from '@components';
import MenuList from './components/MenuList';
import { useNavigate } from 'react-router-dom';
import { profileAPIs } from '../../shared/APIs';

export default function ProfilePage() {
    const [specialityModal, setSpecialityModal] = useState(false);
    const [contactsModal, setContactsModal] = useState(false);
    const [educationModal, setEducationModal] = useState(false);
    const [skillsModal, setSkillsModal] = useState(false);
    const [languagesModal, setLanguagesModal] = useState(false);

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        last_name: '',
        first_name: '',
        birth_date: Date.now(),
        information: {
            city: '',
            country: '',
            about: '',
            specialties: [{ direction: '', level: '' }],
            contacts: [{ type: '', value: '' }],
            educations: [
                {
                    name: '',
                    type: '',
                    specialization: '',
                    level: '',
                    start: '',
                    finish: ''
                }
            ],
            favorites: [],
            experiences: [
                {
                    company: '',
                    project_name: '',
                    position_in_project: '',
                    description: '',
                    start: Date.now(),
                    end: Date.now(),
                    links: [],
                    tech_stack: []
                }
            ],
            languages: [{ title: '', level: '' }],
            skills: [{ title: '', level: '' }]
        }
    });

    useEffect(() => {
        profileAPIs.getUserInfo().then((value) => {
            setData(value);
        });
    }, []);

    return (
        <div className="profile--page">
            <div className="profile--page__menu">
                <div className="profile--page__menu--avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="profile--page__menu--bold--text">
                    {data.last_name} {data.first_name}
                </div>
                <div>
                    <div className="profile--page__menu--text">
                        {new Date(data.birth_date).toLocaleDateString()}
                    </div>
                    <div className="profile--page__menu--text">
                        {data.information?.city}, {data.information?.country}
                    </div>
                </div>
                <div className="profile--page__menu--times">
                    <div className="profile--page__menu--times--item">
                        <div>Created at:</div>
                        {/* <div>{created_at}</div> */}
                    </div>
                    <div className="profile--page__menu--times--item">
                        <div>Updated at:</div>
                        {/* <div>{updated_at}</div> */}
                    </div>
                </div>

                <MenuList
                    title="SPECIALITY"
                    state={specialityModal}
                    changeState={setSpecialityModal}>
                    <h1>Speciality modal</h1>
                </MenuList>
                <div className="profile--page__menu--list">
                    {data.information?.specialties.map((item) => (
                        <li>
                            {item.direction} ({item.level})
                        </li>
                    ))}
                </div>
                <MenuList
                    title="CONTACTS"
                    state={contactsModal}
                    changeState={setContactsModal}>
                    <h1>Contacts modal</h1>
                </MenuList>
                <div className="profile--page__menu--list">
                    {data.information?.contacts.map((item) => (
                        <li>{item.value}</li>
                    ))}
                </div>
                <MenuList
                    title="EDUCATION"
                    state={educationModal}
                    changeState={setEducationModal}>
                    <h1>Education modal</h1>
                </MenuList>
                <div className="profile--page__menu--list">
                    {data.information?.educations.map((item) => (
                        <div>
                            <div>
                                {new Date(item.start).getFullYear() +
                                    ' - ' +
                                    new Date(item.finish).getFullYear()}
                            </div>
                            <div>{item.name}</div>
                            <div>{item.specialization}</div>
                        </div>
                    ))}
                </div>
                <MenuList
                    title="SKILLS"
                    state={skillsModal}
                    changeState={setSkillsModal}>
                    <h1>Skills modal</h1>
                </MenuList>
                <div className="profile--page__menu--list">
                    {data.information?.skills.map((item) => (
                        <li>
                            {item.title} ({item.level})
                        </li>
                    ))}
                </div>
                <MenuList
                    title="LANGUAGES"
                    state={languagesModal}
                    changeState={setLanguagesModal}>
                    <h1>Languages modal</h1>
                </MenuList>
                <div className="profile--page__menu--list">
                    {data.information?.languages.map((item) => (
                        <li>
                            {item.title} ({item.level})
                        </li>
                    ))}
                </div>
            </div>

            <div className="profile--page__experiences">
                <div className="profile--page__experiences__head">
                    <div>EXPERIENCES</div>
                    <div>
                        <AddButton
                            onClick={() => navigate('/add-experience')}
                        />
                    </div>
                </div>
                {data.information?.experiences.map((item) => (
                    <div className="profile--page__experiences__item">
                        <ExperienceCard
                            title={item.company + ' | ' + item.project_name}
                            position={item.position_in_project}
                            period={
                                new Date(
                                    item.start
                                ).toLocaleDateString('en-us', {
                                    year: 'numeric',
                                    month: 'short'
                                }) +
                                ' - ' +
                                new Date(
                                    item.end
                                ).toLocaleDateString('en-us', {
                                    year: 'numeric',
                                    month: 'short'
                                })
                            }
                            description={item.description}
                            techStack={item.tech_stack}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
