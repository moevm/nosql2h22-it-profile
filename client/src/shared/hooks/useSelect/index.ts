import { useState } from 'react';

export function useSelect(
    initVariants: string[],
    options?: {
        initalState?: any[];
        multiple?: boolean;
    }
) {
    const { initalState = [], multiple = true } = options ?? {};
    const [variants, setVariants] = useState(initVariants);
    const [items, setSelectedItems] = useState(options?.initalState ?? []);

    const isSelected = (item: string) => {
        return items.includes(item);
    };

    const deleteItem = (item: string) => {
        setSelectedItems(items.filter((val) => val !== item));
    };

    const selectItem = (item: string) => {
        setSelectedItems((curr) => [...curr, item]);
    };

    const change = (item: string) => {
        if (multiple) {
            if (isSelected(item)) {
                deleteItem(item);
            } else {
                selectItem(item);
            }
        } else {
            setSelectedItems([item]);
        }
    };

    const reset = () => {
        setSelectedItems(initalState);
        setVariants(initVariants);
    };

    const filter = (value: string) => {
        setVariants(
            initVariants.filter((item) =>
                item.toLowerCase().includes(value.toLowerCase())
            )
        );
    };

    return {
        items,
        variants,
        change,
        deleteItem,
        reset,
        filter
    };
}
