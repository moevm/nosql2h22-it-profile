import {
    Avatar,
    DateInput,
    GenderToggle,
    TextArea,
    TextInput,
    EmailInput,
    Button
} from '@components';
import { useNavigate } from 'react-router-dom';
import avatar from '../../asserts/avatar.jpg';
import './style.scss';

export default function EditProfile() {
    const navigate = useNavigate();

    return (
        <div className="edit--page">
            <form className="edit--profile">
                <div className="edit--profile--left">
                    <div className="edit--profile--left__avatar">
                        <Avatar src={avatar} />
                    </div>
                    <div>
                        <GenderToggle />
                    </div>
                </div>
                <div className="edit--profile--inputs">
                    <div className="edit--profile--inputs--item">
                        <div>
                            <TextInput
                                title="First name"
                                name="first_name"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <TextInput
                                title="Last name"
                                name="last_name"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="edit--profile--inputs--item">
                        <DateInput title="Birthday" name="birthday" />
                        <div style={{ flex: '1 1 100%' }}></div>
                    </div>
                    <div className="edit--profile--inputs--item">
                        <div>
                            <EmailInput
                                title="EMAIL"
                                name="email"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <TextInput
                                title="Phone Number"
                                name="phone_number"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="edit--profile--inputs--item">
                        <div>
                            <TextInput
                                title="Country"
                                name="country"
                                placeholder=""
                            />
                        </div>
                        <div>
                            <TextInput
                                title="City"
                                name="city"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="edit--profile--inputs--item">
                        <TextArea title="About" name="about" />
                    </div>
                    <div className="edit--profile--inputs--buttons">
                        <Button
                            variant="primary"
                            onClick={() => navigate('/profile')}>
                            Back to Home
                        </Button>
                        <Button type="submit">Save Changes</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}
