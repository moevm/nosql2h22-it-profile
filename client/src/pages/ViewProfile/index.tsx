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

    const [data, setData] = useState(() => ({
        email: 'mr.loykonen@mail.ru',
        last_name: 'Loykonen',
        first_name: 'Mikhail',
        birth_date: '2001-09-15',
        information: {
            city: 'St.Petersburg',
            country: 'Russia',
            specialties: [{ direction: 'Frontend', level: 'Junior' }],
            about: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
            contacts: [
                { type: 'phone', value: '+79219843946' },
                { type: 'email', value: 'mr.loykonen@mail.ru' }
            ]
        }
    }));

    const [age, setAge] = useState(() => {
        const diff =
            new Date().getFullYear() - new Date(data.birth_date).getFullYear();
        return diff;
    });

    useEffect(() => {
        console.log(userId);

        if (userId) {
            usersAPIs.getUser('/' + userId).then((value) => {
                setData(value);
            });
        }
    }, []);

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
                        {data.information.specialties[0].level}{' '}
                        {data.information.specialties[0].direction}
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
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i, index) => (
                            <div
                                key={index}
                                className="view--page__experiences--item">
                                <ExperienceCard
                                    viewOnly={true}
                                    title={'ooo studo'}
                                    position={'Team Lid'}
                                    period={'2019-2022'}
                                    description={
                                        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit hic labore a tempore porro inventore pariatur deserunt animi dignissimos nam similique, laudantium aliquam magnam molestias fugit minima cum commodi molestiae?'
                                    }
                                    techStack={['div']}
                                    links={[
                                        {
                                            to: 'https://github.com',
                                            title: 'GitHub'
                                        }
                                    ]}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <span className="view--page__separator"></span>
                <div className="view--page__addition--info">
                    <div className="view--page__addition--infos">
                        <div className="view--page__addition--item view--page__title">
                            EDUCATION
                        </div>
                        <div className="view--page__addition--item view--page__title">
                            SKILLS
                        </div>
                        <div className="view--page__addition--item view--page__title">
                            ACCOUNT
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
