import { Select, UserCard } from '@components';
import { useEffect, useState } from 'react';
import Button from '../../shared/components/Button';
import { searchAPIs } from '../../shared/APIs/search';
import './style.scss';
import { IUser } from '@interfaces';
import { useSelect } from '../../shared/hooks/useSelect';
import cites from './../../shared/data/cities.json';

export default function SearchPage() {
    const specializations = useSelect(['Backend', 'Frontend', 'DevOps']);

    const languages = useSelect([
        'C++',
        'C#',
        'Java',
        'Scala',
        'Rust',
        'Swift',
        'Kotlin',
        'Python',
        'JavaScript',
        'TypeScript',
        'Go',
        'PHP'
    ]);

    const skills = useSelect([
        'Mongo',
        'MySQL',
        'PostgreSQL',
        'React',
        'Angular',
        'Vue',
        'Unity3D',
        'Unreal Engine 4',
        'Flask',
        'FastAPI',
        'Redis',
        'RabbitMQ',
        'Cassandra',
        'Neo4j',
        'iOS',
        'Android',
        'Jenkins',
        'Grafana',
        'Prometheus',
        'Ansible',
        'Bash',
        'Docker',
        'Kubernetes',
        'Bootstrap 5',
        'Redux',
        'Nginx',
        'Apache',
        'SQLite',
        'Blender',
        'OpenGL',
        'DirectX',
        '.NET',
        'Express',
        'NestJS',
        'Node',
        'Django',
        'Vite',
        'Figma'
    ]);

    const levels = useSelect([
        'Intern',
        'Junior',
        'Middle',
        'Senior',
        'Expert',
        'Team Lead'
    ]);

    const locations = useSelect(
        (cites as unknown as { country: string; capital: string }[]).map(
            ({ capital }) => capital
        )
    );

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        searchAPIs.users({}).then((data) => {
            setUsers(data);
        });
    }, []);

    const sendQuery = () => {
        searchAPIs
            .users({
                specialization: specializations.items,
                language: languages.items,
                skills: skills.items,
                level: levels.items,
                countries: locations.items
            })
            .then((data) => {
                setUsers(data);
            });
    };

    function reset() {
        specializations.reset();
        languages.reset();
        skills.reset();
        locations.reset();
        levels.reset();
    }

    return (
        <div className="search--page">
            <div className="search--page__settings">
                <div className="search--page__title">Search Settings</div>

                <div className="search--page__setting--items">
                    <div className="search--page__setting--item">
                        <Select
                            title="SPECIALIZATION"
                            items={specializations.items}
                            variants={specializations.variants}
                            onChange={specializations.change}
                            onSearch={specializations.filter}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LANGUAGE"
                            items={languages.items}
                            variants={languages.variants}
                            onChange={languages.change}
                            onSearch={languages.filter}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="SKILLS"
                            items={skills.items}
                            variants={skills.variants}
                            onChange={skills.change}
                            onSearch={skills.filter}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LEVEL"
                            items={levels.items}
                            variants={levels.variants}
                            onChange={levels.change}
                            onSearch={levels.filter}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LOCATION"
                            items={locations.items}
                            variants={locations.variants}
                            onChange={locations.change}
                            onSearch={locations.filter}
                        />
                    </div>
                    {/* <div className="search--page__setting--item">
                        <div className="search--page__experience">
                            <span className="search--page__experience--title">
                                EXPERIENCE
                            </span>
                            <div className="search--page__experience--values">
                                <span>from:</span>
                                <input type="text" placeholder="0" />
                                <select name="experience--from">
                                    <option value="months">months</option>
                                    <option value="years">years</option>
                                </select>
                            </div>
                            <div className="search--page__experience--values">
                                <span>to:</span>
                                <input type="text" placeholder="0" />
                                <select name="experience--to">
                                    <option value="months">months</option>
                                    <option value="years">years</option>
                                </select>
                            </div>
                        </div>
                    </div> */}

                    <div className="search--page__setting--buttons search--page__setting--item">
                        <div>
                            <Button variant="primary" onClick={reset}>
                                Reset
                            </Button>
                        </div>
                        <div>
                            <Button onClick={() => sendQuery()}>Apply</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search--page__separator"></div>
            <div className="search--page__results">
                <div className="search--page__title">Search Results</div>

                <div className="search--page__result--items">
                    {users.map((user) => {
                        return (
                            <UserCard
                                key={(user as unknown as { _id: string })._id}
                                data={user}></UserCard>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
