import { FormEventHandler, useReducer, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPIs } from '../../shared/APIs';
import SplitScreen from '../../shared/layout/SplitScreen';
import avatar from '../../asserts/avatar.jpg';

import {
    Button,
    DateInput,
    PasswordInput,
    EmailInput,
    TextArea,
    TextInput,
    GenderToggle,
    Avatar
} from '@components';

import './style.scss';

export default function RegisterPage() {
    const [step, setStep] = useState(1);

    const navigate = useNavigate();

    const [user_data, setUserData] = useState<{
        email?: string;
        password?: string;
        confirm?: string;
        first_name?: string;
        last_name?: string;
        sex?: string;
        birth_date?: number;
    }>({ sex: 'man' });

    const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();

        authAPIs.signUp(user_data as any).then(() => {
            navigate('/sign-in');
        });

        return false;
    };

    const onChangeInput = (e: any) => {
        const { name, value } = e.target;
        switch (name) {
            case 'birth_date':
                setUserData((curr) => ({
                    ...curr,
                    [name]: new Date(value).getTime()
                }));
                break;
            default:
                setUserData((curr) => ({
                    ...curr,
                    [name]: value
                }));
        }
    };

    const isFirstStepOk = () => {
        return (
            !!user_data?.password &&
            !!user_data?.email &&
            !!user_data?.confirm &&
            user_data?.password === user_data?.confirm
        );
    };

    const isFull = () => {
        return (
            !!user_data?.first_name &&
            !!user_data?.last_name &&
            !!user_data?.birth_date &&
            !!user_data?.sex
        );
    };

    return (
        <>
            <SplitScreen.LeftSide>
                {step === 1 ? (
                    <div className="register">
                        <div className="register--wrapper">
                            <div>
                                <strong>Step 01</strong>
                                <span className="disabled">/02</span>
                                <h1 className="register__header">
                                    Registration
                                </h1>
                            </div>
                            <form
                                onChange={onChangeInput}
                                className="register__form">
                                <EmailInput title={'Email'} name={'email'} />
                                <PasswordInput
                                    title={'Password'}
                                    name={'password'}
                                />
                                <PasswordInput
                                    title={'Re-Password'}
                                    name={'confirm'}
                                    placeholder={
                                        'Please re-enter your password...'
                                    }
                                />
                                <div className="flex gap-4px">
                                    <Button variant="primary">Help ?</Button>
                                    <Button
                                        disabled={!isFirstStepOk()}
                                        onClick={() => setStep(2)}>
                                        Next
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            backgroundColor: 'darkgray',
                            width: '100%',
                            height: '100%'
                        }}></div>
                )}
            </SplitScreen.LeftSide>
            <SplitScreen.RightSide>
                {step === 2 ? (
                    <div className="register">
                        <div className="register--wrapper">
                            <div>
                                <strong>Step 02</strong>
                                <span className="disabled">/02</span>
                                <h1 className="register__header">
                                    Registration
                                </h1>
                            </div>
                            <form
                                onSubmit={onSubmit}
                                onChange={onChangeInput}
                                className="register__form">
                                {/* <div className="register__form--avatar">
                                    <Avatar src={avatar} />
                                </div> */}
                                <GenderToggle
                                    onChange={(value) =>
                                        setUserData((curr) => ({
                                            ...curr,
                                            sex: value
                                        }))
                                    }
                                />
                                <TextInput
                                    title="First name"
                                    name="first_name"
                                    placeholder="name..."
                                />
                                <TextInput
                                    title="Last name"
                                    name="last_name"
                                    placeholder="name..."
                                />
                                <DateInput
                                    title="Birth Date"
                                    name="birth_date"
                                />
                                <div className="flex gap-4px">
                                    <Button
                                        variant="primary"
                                        onClick={() => setStep(1)}>
                                        Prev
                                    </Button>
                                    <Button type="submit" disabled={!isFull()}>
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <div
                        style={{
                            backgroundColor: 'darkgray',
                            width: '100%',
                            height: '100%'
                        }}></div>
                )}
            </SplitScreen.RightSide>
        </>
    );
}
