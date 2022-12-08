import { Select, UserCard } from '@components';
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
                                    <option value="years">yaers</option>
                                </select>
                            </div>
                            <div className="search--page__experience--values">
                                <span>to:</span>
                                <input type="text" placeholder="0" />
                                <select name="experience--to">
                                    <option value="months">months</option>
                                    <option value="years">yaers</option>
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
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                                        <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                    <UserCard
                        data={{
                            birth_date: 946711800000,
                            email: 'user@email.com',
                            first_name: 'Mr. Loykonen',
                            information: {
                                about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel? 
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem porro libero sint necessitatibus enim nihil sunt quos, dolor dolore at eius ut facilis impedit officiis, expedita quidem. Iure, nisi vel?
                        
                        `,
                                city: 'St.Petersburg',
                                contacts: [],
                                country: 'Russia',
                                educations: [],
                                experiences: [
                                    {
                                        company: 'ooo wow',
                                        start: 1546327800000,
                                        end: 1577863800000,
                                        links: ['https://github.com'],
                                        position_in_project: 'Team Lid',
                                        project_name: 'Happy Code',
                                        tech_stack: ['Wow'],
                                        description: ''
                                    }
                                ],
                                favorites: [],
                                languages: ['JavaScript'],
                                skills: [
                                    {
                                        title: 'Git',
                                        level: ''
                                    },
                                    {
                                        title: 'JavaScript',
                                        level: ''
                                    },
                                    {
                                        title: 'C++',
                                        level: ''
                                    }
                                ],
                                specialties: [
                                    {
                                        direction: 'Frontender',
                                        level: 'Senior'
                                    }
                                ]
                            },
                            last_name: '',
                            role: ['USER'],
                            sex: 'M'
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
