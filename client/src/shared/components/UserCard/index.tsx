import { IUser } from '@interfaces';
import { useState } from 'react';
import Button from '../Button';
import Chips from '../Chips';
import Avatar from '../Form/Avatar';
import './style.scss';

interface IUserProps {
    data: IUser;
}

export default function UserCard({data} : IUserProps) {
    const [age, setAge] = useState(() => {
        const diff = new Date().getFullYear() - new Date(data.birth_date).getFullYear();
        return diff;
    });

    return (
        <div className="user--card">
            <div className="user--card__info">
                <div className="user--card__info__avatar">
                    <div className="user--card__avatar">
                        <Avatar />
                    </div>
                </div>
                <div className="user--card__info__text">{data.last_name} {data.first_name}</div>
                <div className="user--card__info__text">{age} years old</div>
                <div className="user--card__info__text">
                    {data.information.city}, {data.information.country}
                </div>
                <div className="user--card__info__buttons">
                    <div>
                        <Button>♡</Button>
                    </div>
                </div>
            </div>
            <div className="user--card__detail">
                <div className="user--card__detail__specialty">
                    {data.information.specialties[0].direction} {data.information.specialties[0].level}
                </div>
                <div className="user--card__detail__text">
                    {data.information.about}
                </div>
                <div>
                    <div className="user--card__detail__text">Skills:</div>
                    <Chips
                        values={data.information.skills.map((item) => item.title)}
                    />
                </div>
                <div className="user--card__detail__buttons">
                    <div>
                        <Button>MORE</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
