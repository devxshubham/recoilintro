import {RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { todoAtom } from "./store/atoms/todo";
import { filterAtom } from "./store/atoms/filter"
import { filterSelector } from "./selector/filterTodo";
import {useState} from 'react'

function App(){

  return(
    <>
      <RecoilRoot>
        <FilterTodo />
        <CreateTodo></CreateTodo>
        <Todos></Todos>
      </RecoilRoot>
    </>
  )
}
function FilterTodo(){
  const setFilter = useSetRecoilState(filterAtom)
  return <div>
    <input onChange={(e) => {
      setFilter(e.target.value);
    }} placeholder="Search"/>
  </div>
}
function CreateTodo(){
  const [todos,setTodos] = useRecoilState(todoAtom)
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return <div>
    <input type="text" onChange={(e)=>{
      setTitle(e.target.value);
    }} />
    <input type="text" onChange={(e)=>{
      setDesc(e.target.value);
    }} />
    <button onClick={()=>{
      setTodos([...todos,{
        title : title,
        description : desc
      }])
    }}>add Todo</button>
  </div>
}
function Todos(){
  const todos = useRecoilValue(filterSelector)
 
  return(
    <>
      {todos.map( todo => {
        
        return <div >
          <h1>{todo.title}</h1>
          <h6>{todo.description}</h6>
        </div>
      })}
    </>
  )
}


export default App;