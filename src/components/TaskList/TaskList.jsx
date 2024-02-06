import { useDispatch, useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "redux/constants";
import { selectFiltersStatus, selectTasks, selectVisibleTasks } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "../../redux/operations";
export const TaskList = () => {
  // const task = useSelector(selectTasks)
  // const filterStatus = useSelector(selectFiltersStatus)
const dispatch = useDispatch()
const tasks = useSelector(selectVisibleTasks)
useEffect(()=>{
dispatch(fetchTasks())
}, [dispatch])




 
  return (
    <ul className={css.list}>
      {tasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
