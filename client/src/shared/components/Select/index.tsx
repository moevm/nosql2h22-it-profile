import { useCallback, useEffect, useState } from 'react';
import { Chips } from '@components';
import './style.scss';

interface ISelectProps {
    title: string;
    variants: Array<string>;
    items: Array<string>;
    onSearch?: (value: string) => void;
    onChange?: (current: string) => void;
}

export default function Select({
    title,
    items,
    onChange,
    variants,
    onSearch
}: ISelectProps): JSX.Element {
    const [showMenu, setShowMenu] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
        setSearchValue('');
    }, [showMenu]);

    useEffect(() => {
        if (onSearch) onSearch(searchValue);
    }, [searchValue]);

    const handleInputClick = (e: any) => {
        e.stopPropagation();
        setShowMenu((prev) => !prev);
    };

    const isSelected = (item: string) => {
        return items.includes(item);
    };

    const onSearchInputChange = (e: any) => {
        setSearchValue(e.target.value);
    };

    const onItemClick = (item: string) => {
        if (onChange) onChange(item);
    };

    return (
        <div className="select">
            <div className={'select__input ' + (showMenu ? 'open' : '')}>
                {showMenu ? (
                    <div className="select__search">
                        <input
                            type="text"
                            placeholder={title}
                            onChange={onSearchInputChange}
                            value={searchValue}
                            autoFocus={true}
                        />
                    </div>
                ) : (
                    <div className={'select__title'}>{title}</div>
                )}

                <div className="select__icon" onClick={handleInputClick}>
                    <svg height="20" width="20" viewBox="0 0 20 20">
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                </div>
            </div>
            {showMenu && (
                <div className="select__menu">
                    {variants.map((item) => (
                        <div
                            key={item}
                            className={
                                'select__item ' +
                                (isSelected(item) && 'selected')
                            }
                            onClick={() => onItemClick(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}

            <div className="select__selected--items">
                <Chips values={items} onRemove={onChange} closable />
            </div>
        </div>
    );
}






