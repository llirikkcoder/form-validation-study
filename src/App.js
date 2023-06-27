import './App.css';
import MagicForm from './components/MagicForm';
import MagicFormMui from './components/MagicFormMui';
import SimpleForm from './components/SimpleForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm />
        <MagicForm />
        <MagicFormMui />
        <div style={{padding: '20px 0'}}>P.S.: Magic = react-hook-form + yup</div>
      </header>
    </div>
  );
}

export default App;
