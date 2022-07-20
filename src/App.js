import Home from "./pages/home/home";
import "./assets/scss/main.scss"
import { Route, Routes } from "react-router-dom";
import AddTodo from "./components/container/add-todo/add-todo";
import EditFeedback from "./pages/home/edit-feedback/edit-feedback";
import CreateFeedBack from "./pages/home/create/create";

const App = () =>{
  // npm i react-router-dom
  return(
    <Routes>
      <Route path="/" element={<Home /> } />
       <Route path="/add-todo" element={<AddTodo/>} />
      <Route path="/edit" element={<EditFeedback/>}/>
      <Route path="/create" element={<CreateFeedBack/>}/>
    </Routes>
  )
}

export default App;
