import Task from './Task';
import { useContext, useEffect } from 'react';
import { TasksContext } from '../TasksContext';
import { showTasks } from '../actions';

const TasksList = () => {
  const { tasks, setTasks } = useContext(TasksContext);

  useEffect(() => {
    showTasks(setTasks)
  }, [setTasks])

  return (
    <div style={{ textAlign: 'center', marginLeft: 100 }}>
      {tasks && tasks.map(task => <Task task={task} key={task._id} />)}
    </div>

  );
}

export default TasksList;