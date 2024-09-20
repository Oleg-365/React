
import { Provider } from 'react-redux';
import './App.css';
import { store } from './store/store';
import AddProduct from './components/AddProduct';
import ProductsList from './components/ProductsList';

const productsData = [
  { id: 1, name: "Product 1", description: "description 1", price: 10 },
  { id: 2, name: "Product 2", description: "description 2", price: 20 },
  { id: 3, name: "Product 3", description: "description 3", price: 30 }
]

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProductsList products={productsData} />
        <AddProduct />

      </Provider>

    </div>
  );
}

export default App;

