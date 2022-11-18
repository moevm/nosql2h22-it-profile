import { useState } from 'react';
import ManIcon from '../../../../asserts/mars.png';
import WomanIcon from '../../../../asserts/femenine.png';
import './style.scss';

export default function GenderToggle() {
    const [currentValue, setCurrentValue] = useState(true);

    const toggle = (value: boolean) => {
        setCurrentValue(value);
    };

    return (
        <div className="gender--toggle">
            <label
                htmlFor="man"
                className={
                    'gender--toggle__item ' + (currentValue ? 'active' : '')
                }
                onClick={() => toggle(true)}>
                <img src={ManIcon} />
                <input
                    id="man"
                    type="radio"
                    name="gender"
                    value="man"
                    defaultChecked
                    hidden
                />
            </label>
            <label
                htmlFor="woman"
                className={
                    'gender--toggle__item ' + (!currentValue ? 'active' : '')
                }
                onClick={() => toggle(false)}>
                <img src={WomanIcon} />
                <input
                    id="woman"
                    type="radio"
                    name="gender"
                    value="woman"
                    hidden
                />
            </label>
        </div>
    );
}
