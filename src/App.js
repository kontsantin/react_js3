
import './App.css';
import TemperatureConverter from './TemperatureConverter';
import TodoList from './TodoList';


function App() {
  return (
    <div className="App">
      <h1>Температурный конвертер</h1>
      <TemperatureConverter />
      <h1>Список дел</h1>
      <TodoList />
    </div>
  );
}

export default App;
