import './App.css';
import TasksList from './components/TasksList'
import Input from './components/Input';

const App = () => {
  return (
    <div className='App'>
      <Input />
      <TasksList />
    </div>

  );
}

export default App;
