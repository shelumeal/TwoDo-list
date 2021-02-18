import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form></Form>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
