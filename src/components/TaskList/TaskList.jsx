import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "redux/constants";
import { getFiltersStatus, getTasks } from "../../redux/selectors";
export const TaskList = () => {
  const task = useSelector(getTasks)
  const filterStatus = useSelector(getFiltersStatus)
 const vidibleTask =  task.filter((task)=>{
    switch (filterStatus) {
      case statusFilters.active:
        return !task.completed;
        case statusFilters.completed:
          return task.completed ;
 
    
      default:
        return task;
    }
  })
  return (
    <ul className={css.list}>
      {vidibleTask.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
