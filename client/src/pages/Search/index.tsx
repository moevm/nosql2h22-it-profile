import { Select, UserCard } from '@components';
import { useEffect, useState } from 'react';
import Button from '../../shared/components/Button';
import { searchAPIs } from '../../shared/APIs/search';
import './style.scss';
import { IUser } from '@interfaces';

export default function SearchPage() {
    const [specializationItems, setSpecializationItems] = useState([
        'Backend',
        'Frontend',
        'DevOps'
    ]);
    const [languages, setLanguages] = useState([
        'C++',
        'Java',
        'Python',
        'JavaScript',
        'TypeScript'
    ]);

    const [skills] = useState([
        'Mongo',
        'MySQL',
        'React',
        'Angular',
        'Unity',
        'Unreal Engine'
    ]);

    const [levels] = useState([
        'Intern',
        'Junior',
        'Middle',
        'Senior',
        'Expert',
        'Team Lead'
    ]);

    const [locations] = useState(['Russia', 'Chine']);

    const [variants] = useState([
        'months',
        'years'
        // 'January',
        // 'February',
        // 'March',
        // 'April',
        // 'May',
        // 'June',
        // 'July',
        // 'August',
        // 'September',
        // 'October',
        // 'November',
        // 'December'
    ]);

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        searchAPIs.users({}).then((data) => {
            setUsers(data);
        });
    }, []);

    return (
        <div className="search--page">
            <div className="search--page__settings">
                <div className="search--page__title">Search Settings</div>

                <div className="search--page__setting--items">
                    <div className="search--page__setting--item">
                        <Select
                            title="SPECIALIZATION"
                            items={specializationItems}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select title="LANGUAGE" items={languages} />
                    </div>
                    <div className="search--page__setting--item">
                        <Select title="SKILLS" items={skills} />
                    </div>
                    <div className="search--page__setting--item">
                        <Select title="LEVEL" items={levels} />
                    </div>
                    <div className="search--page__setting--item">
                        <Select title="LOCATION" items={locations} />
                    </div>
                    <div className="search--page__setting--item">
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
                    </div>

                    <div className="search--page__setting--buttons search--page__setting--item">
                        <div>
                            <Button variant="primary">Reset</Button>
                        </div>
                        <div>
                            <Button>Apply</Button>
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
                                key={(user as unknown as { id: string }).id}
                                data={user}></UserCard>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
