import { Select, UserCard } from '@components';
import { useEffect, useState } from 'react';
import Button from '../../shared/components/Button';
import { searchAPIs } from '../../shared/APIs/search';
import './style.scss';
import { IUser } from '@interfaces';

export default function SearchPage() {
    const [specializationItems] = useState([
        'Backend',
        'Frontend',
        'DevOps',
        'Fullstack',
        'Gamedev',
        'Data Science',
        'Desktop'
    ]);

    const [languages] = useState([
        'C',
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

    const [skills] = useState([
        'MongoDB',
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

    const [levels] = useState([
        'Intern',
        'Junior',
        'Middle',
        'Senior',
        'Expert',
        'Team Lead'
    ]);

    const [locations] = useState([
        'Russia',
        'India',
        'USA',
        'Kazakhstan',
        'China'
    ]);

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        searchAPIs.users({}).then((data) => {
            setUsers(data);
        });
    }, []);

    const [selectedSpecializations, setSelectedSpecializations] = useState<
        string[]
    >([]);
    const onSpecializationSelectChange = (items: string[]) => {
        setSelectedSpecializations(items);
        // console.log(selectedSpecializations)
    };

    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
    const onSelectLanguageChange = (items: string[]) => {
        setSelectedLanguages(items);
    };

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const onSkillsSelectChange = (items: string[]) => {
        setSelectedSkills(items);
    };

    const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
    const onLevelsSelectChange = (items: string[]) => {
        setSelectedLevels(items);
    };

    const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
    const onLocationsSelectChange = (items: string[]) => {
        setSelectedLocations(items);
    };

    const resetOptions = () => {
        setSelectedSpecializations([]);
        setSelectedLanguages([]);
        setSelectedSkills([]);
        setSelectedLevels([]);
        setSelectedLocations([]);
    };

    const sendQuery = () => {
        searchAPIs
            .users({
                specialization: selectedSpecializations,
                language: selectedLanguages,
                skills: selectedSkills,
                level: selectedLevels,
                countries: selectedLocations
            })
            .then((data) => {
                setUsers(data);
            });
    };

    return (
        <div className="search--page">
            <div className="search--page__settings">
                <div className="search--page__title">Search Settings</div>

                <div className="search--page__setting--items">
                    <div className="search--page__setting--item">
                        <Select
                            title="SPECIALIZATION"
                            items={specializationItems}
                            onChange={onSpecializationSelectChange}
                            initialState={selectedSpecializations}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LANGUAGE"
                            items={languages}
                            onChange={onSelectLanguageChange}
                            initialState={selectedLanguages}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="SKILLS"
                            items={skills}
                            onChange={onSkillsSelectChange}
                            initialState={selectedSkills}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LEVEL"
                            items={levels}
                            onChange={onLevelsSelectChange}
                            initialState={selectedLevels}
                        />
                    </div>
                    <div className="search--page__setting--item">
                        <Select
                            title="LOCATION"
                            items={locations}
                            onChange={onLocationsSelectChange}
                            initialState={selectedLocations}
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
                            <Button
                                variant="primary"
                                onClick={() => resetOptions()}>
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
                                key={(user as unknown as { id: string }).id}
                                data={user}></UserCard>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
