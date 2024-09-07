import "./App.css";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <Message text="Сообщение №1." />
      <Message text="Сообщение №2" />
      <Message text="Сообщение №3" />
    </div>
  );
}

export default App;
