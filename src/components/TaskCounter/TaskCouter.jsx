import { useSelector } from "react-redux";
import css from "./TaskCouter.module.css";
import { getTasks, count } from "../../redux/selectors";

export const TaskCounter = () => {
  const task = useSelector(count)
  
  return (
    <div>
      <p className={css.text}>Active: {task.active}</p>
      <p className={css.text}>Completed: {task.completed}</p>
    </div>
  );
};
