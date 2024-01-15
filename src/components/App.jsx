import { Layout } from "./Layout/Layout";
import { AppBar } from "./AppBar/AppBar";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/TaskList";
import { useSelector } from "react-redux";

export const App = () => {
  // const state = useSelector((state)=>state.task[1])
  return (

    <Layout>
      <AppBar />
      <TaskForm />
      <TaskList />
    </Layout>
  );
};
