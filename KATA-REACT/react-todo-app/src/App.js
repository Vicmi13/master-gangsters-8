import './App.css';
import ListComponent from './components/ListComponent';
import SearchComponent from './components/SearchComponent';

function App() {

  const handleTaskValue = (taskValue) => {
    console.log('taskValue', taskValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h4>Todo app con react</h4>

        <SearchComponent inputTask={handleTaskValue} />
        <ListComponent />
      </header>
    </div>
  );
}

export default App;
