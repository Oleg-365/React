import { createContext, useState } from "react";

// Создаем контекст для фильтра

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    // локальное состояние для хранения фильтра
    const [filter, setFilter] = useState('all');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
};