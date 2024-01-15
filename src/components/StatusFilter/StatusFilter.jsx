import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "redux/constants";
import { setStatusFilter} from "../../redux/slice";
import { getFiltersStatus } from "redux/selectors";
export const StatusFilter = () => {
  const filter = useSelector(getFiltersStatus)
const dispatch = useDispatch()
  const handleToggle = (value)=>{
dispatch(setStatusFilter(value))
  }
  return (
    <div className={css.wrapper}>
      <Button  selected={filter===statusFilters.all} onClick={()=>handleToggle(statusFilters.all)} >All</Button>
      <Button  selected={filter===statusFilters.active}onClick={()=>handleToggle(statusFilters.active)} >Active</Button>
      <Button selected={filter===statusFilters.completed} onClick={()=>handleToggle(statusFilters.completed)}>Completed</Button>
    </div>
  );
};
