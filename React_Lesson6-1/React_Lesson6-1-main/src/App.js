import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import ButtonComponent from './components/ButtonComponent';
import ButtonComponentMinus from './components/ButtonComponentMinus';
import CounterComponent from './components/CounterComponent';

// npm i react-redux
// npm i @reduxjs/toolkit

const App =() =>{
	return (
		<Provider store={store}>
			<div>
				<CounterComponent />
				<ButtonComponent />
				<ButtonComponentMinus />
			</div>
		</Provider>
	)
}

// При загрузке приложения юзер видит 3 основных компонента: список задач (TodoList),
// поле для добавления новой задачи (AddTodo) и фильтр для выбора видимых задач (TodoFilter)

// В (TodoList), изер видит все текущие задачи. Задачи могут быть отчемены как выполненные или нет.
// Юзер может удалить задачу из списка.

// В (AddTodo), юзер может ввести текст новой задачи и добавить ее в список нажатием кнопки

// В (TodoFilter) , юзер может фильтровать задачи на три категории: все, выполнеынные и не выполненные

// Все действия пользователя приводят к отправке действий в хранилище Redux через функции-действия,
// определенные в файле todoActions.js.

// Редюсер  в  файле todoActions.js слушает действия и обновляет состояние в соответствии с этими действиями

// Компоненты реагируют на изменение состояния и обновляют отображение соответствующим образом 

// Контекст фильтра (в фале withFilter.js) предоставляет возможность изменять фильтр и получать его значение
// в любом компоненте, который его использует.

// Компонент высшего порядка withFilter.js  оборачивает TodoListЮ предоставляя ему функциональность
// фильтрации задач в соответствии с выбранным фильтром.

// Хранилище Redux создается в файле store.js и предается в компонент Provider  в файл index.js
export default App;