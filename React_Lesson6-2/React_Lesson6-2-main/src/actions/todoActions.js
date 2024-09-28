// Костанты для типов действий

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

//  Создание задачи

export const addTodo = (text) => ({
    type: ADD_TODO, // Тип действия
    payload: { text } // полезная нагрузка действия
})

// изменение статуса задачи (выполнено/не выполнено)
export const toggleTodo = (id) => ({
    type:TOGGLE_TODO,
    payload: {id},
})