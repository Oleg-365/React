import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import { FilterProvider } from './contexts/FilterContext';
import { Provider } from 'react-redux';
import store from './store';

// npm i react-redux
// npm i @reduxjs/toolkit


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

// Хранилище Redux создается в файле store.js и предается в компонент Provider  в фал index.js
const App = () => {
	return (
		<Provider store={store}>
			<FilterProvider>
				<AddTodo />
				<TodoList />
				<TodoFilter />
			</FilterProvider>
		</Provider>

	);
}

export default App;