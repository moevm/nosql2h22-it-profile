import { IUser } from '@interfaces';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Chips from '../Chips';
import Avatar from '../Form/Avatar';
import './style.scss';

interface IUserProps {
    data: IUser;
}

export default function UserCard({ data }: IUserProps) {
    const { email, last_name, first_name, information } = data;
    const { about, specialties, city, country } = information;

    const [age, setAge] = useState(
        () => new Date().getFullYear() - new Date(data.birth_date).getFullYear()
    );

    const [specialty] = useState(
        `${specialties[0].direction}, ${specialties[0].level}`
    );

    const [name] = useState(`${first_name}, ${last_name}`);

    return (
        <div className="user--card">
            <div className="user--card__info">
                <div className="user--card__user--photo">
                    <Avatar src="https://avatars.mds.yandex.net/i?id=0008081b26559181af9790287c6e9a26b0c4cbd8-8187038-images-thumbs&n=13" />
                </div>
                <div className="user--card__user--name">{name}</div>
                <div className="user--card__user--location">
                    <div className="user--card__user--age">{age} years old</div>
                    <span>{city}</span>,<span> {country}</span>
                </div>
                <div className="user--card__footer">
                    <div></div>
                    <div>
                        <Button variant="primary">♡</Button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="user--card__detail">
                <div className="user--card__header">
                    <div className="user--card__specialty">{specialty}</div>
                </div>
                <div className="user--card__about--me">{about}</div>
                <div className="user--card__skils">
                    <div>Skills:</div>
                    <Chips
                        values={data.information.skills.map(
                            (item) => item.title
                        )}
                    />
                </div>
                <div className="user--card__footer">
                    <div>
                        <Link
                            className="user--card__more--link"
                            to={'users/' + 1}>
                            MORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
