import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import UserContext from './Contexts/UserContext';
import Header from './Components/Header';
import MainWithLoading from './Components/Main';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState('Гость');
  const [data, setData] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); setData("Приввет НОС")
    }, 2000)
  }, [setIsLoading])
  return (
    <>
      <UserContext.Provider value={{ userName, setUserName }}>
        <Header />

        <MainWithLoading data={data} isLoading={isLoading} />

      </UserContext.Provider>
      <footer>{new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
