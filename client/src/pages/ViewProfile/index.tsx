import { IUser } from '@interfaces';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import avatar from '../../asserts/avatar.jpg';
import { usersAPIs } from '../../shared/APIs';
import ExperienceCard from '../../shared/components/ExperienceCard';
import Avatar from '../../shared/components/Form/Avatar';
import './style.scss';

export default function ViewProfilePage() {
    const { userId } = useParams();

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
                    start: Date.now(),
                    finish: Date.now()
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
        console.log(userId);

        if (userId) {
            usersAPIs.getUser('/' + userId).then((value) => {
                setData(value);
                setAge(
                    new Date().getFullYear() -
                        new Date(value.birth_date).getFullYear()
                );
                console.log(data);
            });
        }
    }, []);

    const [age, setAge] = useState(0);

    return (
        <div className="view--page">
            <div className="view--page__header">
                <div className="view--page__header--avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="view--page__user--info">
                    <div>
                        <div className="view--page__user--name">
                            {data.last_name} {data.first_name}
                        </div>
                        <div className="view--page__user--age">
                            {age} Years old
                        </div>
                    </div>
                    <div className="view--page__user--specialty">
                        {data.information.specialties[0]?.level ?? ''}{' '}
                        {data.information.specialties[0]?.direction ?? ''}
                    </div>
                </div>
                <div>
                    <div className="view--page__title">CONTACTS</div>
                    <div className="view--page__contacts">
                        {data.information.contacts.map((item) => (
                            <div
                                className="view--page__contact"
                                key={item.value}>
                                {item.value}
                            </div>
                        ))}
                        <div className="view--page__contact">
                            {data.information.city}, {data.information.country}
                        </div>
                    </div>
                </div>
            </div>

            <div className="view--page__about">
                <div className="view--page__title">ABOUT ME</div>
                <div>{data.information.about}</div>
            </div>

            <div className="view--page__addition">
                <div className="view--page__addition__exp">
                    <div className="view--page__experiences--title view--page__title">
                        EXPERIENCES
                    </div>
                    <div className="view--page__experiences">
                        {data.information.experiences.map(
                            (i, index) =>
                                i.project_name && (
                                    <div
                                        key={index}
                                        className="view--page__experiences--item">
                                        <ExperienceCard
                                            viewOnly={true}
                                            title={
                                                i.company +
                                                ' | ' +
                                                i.project_name
                                            }
                                            position={i.position_in_project}
                                            period={
                                                new Date(
                                                    i.start
                                                ).toLocaleDateString('en-us', {
                                                    year: 'numeric',
                                                    month: 'short'
                                                }) +
                                                ' - ' +
                                                new Date(
                                                    i.end
                                                ).toLocaleDateString('en-us', {
                                                    year: 'numeric',
                                                    month: 'short'
                                                })
                                            }
                                            description={i.description}
                                            techStack={i.tech_stack}
                                            links={i.links.map((link) => ({
                                                to: link,
                                                title: 'link'
                                            }))}
                                        />
                                    </div>
                                )
                        )}
                    </div>
                </div>
                <span className="view--page__separator"></span>
                <div className="view--page__addition--info">
                    <div className="view--page__addition--infos">
                        <div className="view--page__addition--item view--page__title">
                            EDUCATION
                        </div>
                        <div className="view--page__addition--list">
                            {data.information.educations.map((item) => (
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
                        <div className="view--page__addition--item view--page__title">
                            SKILLS
                        </div>
                        <div className="view--page__addition--list">
                            {data.information.skills.map((item) => (
                                <li>
                                    {item.title} ({item.level})
                                </li>
                            ))}
                        </div>
                        <div className="view--page__addition--item view--page__title">
                            LANGUAGES
                        </div>
                        <div className="view--page__addition--list">
                            {data.information.languages.map((item) => (
                                <li>
                                    {item.title} ({item.level})
                                </li>
                            ))}
                        </div>
                        <div className="view--page__addition--item view--page__title">
                            ACCOUNT
                        </div>
                        <div className="view--page__addition--list">{}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
