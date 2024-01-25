import { useSelector } from "react-redux";
import css from "./TaskCouter.module.css";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const task = useSelector(getTasks)
  const count  = task.reduce((acc, task)=>{
    if(task.completed ){
      acc.completed += 1
    } else{
      acc.active += 1
    }
    return acc
  }, {active: 0, completed:0})
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
