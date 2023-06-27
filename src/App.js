// import logo from './logo.svg';
import './App.css';
import MagicForm from './components/MagicForm';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm />
        <MagicForm />
      </header>
    </div>
  );
}

export default App;
