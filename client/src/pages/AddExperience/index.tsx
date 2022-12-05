import { Button, DateInput, TextArea, TextInput } from '@components';
import { useNavigate } from 'react-router-dom';
import './style.scss';

interface IProps {
    mode: 'edit' | 'create';
}

export default function AddExperiencePage({ mode }: IProps) {
    const navigate = useNavigate();

    return (
        <div className="add--exp--page">
            <div className="add">
                <div className="add__header">NEW EXPERIENCE</div>
                <form className="add__form">
                    <div className="add__form--line">
                        <TextInput
                            name="company"
                            title="Company"
                            placeholder="Company"
                        />
                        <TextInput
                            name="project_name"
                            title="Project name"
                            placeholder="Project name"
                        />
                    </div>
                    <div className="add__form--line">
                        <div className="add__form--date--items">
                            <TextInput
                                name="position"
                                title="Position in project"
                                placeholder="Position"
                            />
                        </div>
                        <div className="add__form--date--items">
                            <DateInput name="start" title="Working period" />
                            <DateInput name="end" title="" />
                        </div>
                    </div>
                    <div className="add__description">
                        <TextArea name="description" title="Description" />
                    </div>
                    <div className="add__form--line">
                        <div className="add__form--item">
                            <TextInput name="links" title="Add links" />
                        </div>
                        <div className="add__form--item">
                            <TextInput name="tech_stack" title="Tech stack" />
                        </div>
                    </div>
                    <div className="add__form--line add__form--buttons">
                        <Button variant="primary" onClick={() => navigate(-1)}>
                            BACK
                        </Button>
                        <Button type="submit">ADD</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
