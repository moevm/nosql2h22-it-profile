import { useState } from 'react';
import Button from '../../shared/components/Button';
import List from '../../shared/components/List';
import MultiSelect from '../../shared/components/MultiSelect';
import './style.scss';

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

    const [locations] = useState(['Russia'])

    return (
        <div className="search--page">
            <div className="search--page__settings">
                <div className="search--page__title">Search Settings</div>
                <div>
                    <MultiSelect
                        title="SPECIALIZATION"
                        items={specializationItems}
                    />
                </div>
                <div>
                    <MultiSelect
                        title="LANGUAGE"
                        items={languages}
                    />
                </div>
                <div>
                    <MultiSelect
                        title="SKILLS"
                        items={skills}
                    />
                </div>
                <div>
                    <MultiSelect
                        title="LEVEL"
                        items={levels}
                    />
                </div>
                <div>
                    <MultiSelect title="LOCATION" items={locations} />
                </div>
                <div className="search--page__settings__experience">
                    EXPERIENCE
                    <div className="search--page__settings__experience--values">
                        <div className='search--page__settings__experience--title'>from:</div>
                        <input type='text' pattern='[0-9]+'></input>
                        <input></input>
                    </div>
                    <div className="search--page__settings__experience--values">
                        <div className='search--page__settings__experience--title'>to:</div>
                        <input type='text' pattern='[0-9]+'></input>
                        <input></input>
                    </div>
                </div>
                <div className="search--page__settings__buttons">
                    <Button variant="primary">Reset</Button>
                    <Button>Apply</Button>
                </div>
            </div>
            <div className="search--page__results">
                <div className="search--page__title">Search Results</div>

                <List title=""></List>
            </div>
        </div>
    );
}
