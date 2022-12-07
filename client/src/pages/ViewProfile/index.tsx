import { IUser } from '@interfaces';
import { useState } from 'react';
import avatar from '../../asserts/avatar.jpg';
import Avatar from '../../shared/components/Form/Avatar';
import './style.scss';

export default function ViewProfilePage() {
    const data = {
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
    };
    const [age, setAge] = useState(() => {
        const diff =
            new Date().getFullYear() - new Date(data.birth_date).getFullYear();
        return diff;
    });

    return (
        <div className="view--page">
            <div className="view--page__header">
                <div className="view--page__header__avatar">
                    <Avatar src={avatar} />
                </div>
                <div className="view--page__header__info">
                    <div className="view--page__title">
                        {data.last_name} {data.first_name}
                    </div>
                    <div>{age} Years old</div>
                    <div>
                        {data.information.specialties[0].direction}{' '}
                        {data.information.specialties[0].level}
                    </div>
                </div>
                <div className="view--page__header__contacts">
                    <div className="view--page__title">CONTACTS</div>
                    {data.information.contacts.map((item) => 
                        <div key={item.value}>{item.value}</div>
                    )}
                    <div>
                        {data.information.city}, {data.information.country}
                    </div>
                </div>
            </div>

            <div className="view--page__about">
                <div className="view--page__title">ABOUT ME</div>
                <div>{data.information.about}</div>
            </div>

            <div className="view--page__addition">
                <div className="view--page__addition__exp">
                    <div className="view--page__addition--item view--page__title">
                        EXPERIENCES
                    </div>
                    <div style={{ width: 900 }}></div>
                </div>
                <div className="view--page__addition__info">
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
    );
}
