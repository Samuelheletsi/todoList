import { useState ,useEffect, React} from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos,setTodos] = useState([]);
  const [todoValue,setTodoValue] = useState("");

  function persist(newList){
     localStorage.setItem('todos',JSON.stringify({todos : newList}))
  }

  function addTodo(newTodo){
    const newTodoList = [...todos,newTodo];
    persist(newTodoList);
    setTodos(newTodoList);
  }

  function handleDelete(index){
    const newTodoList = todos.filter((todos,todoIndex)=>{
      return todoIndex !== index ;
    });
    
    persist(newTodoList);
    setTodos(newTodoList); 
    
  }
  function handleEdit(index){
    const valueTodoEdit = todos[index];
    setTodoValue(valueTodoEdit);
    handleDelete(index);
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    
    let localTodos = localStorage.getItem('todos');
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);

  },[])



  return (
    <>
    
      <TodoInput addTodo={addTodo} todoValue={todoValue}  setTodoValue={setTodoValue}/>
      <TodoList handleDelete={handleDelete} todos={todos}  handleEdit ={handleEdit} />
     

    </>
  )
}

export default App
