import React, { useState } from 'react';

const App:React.FC=()=> {
   type todoType={
    id: number;
    content: string, 
   }

   const [todo,setTodo]=useState<string>("");
   const [todoList,setTodoList]=useState<todoType[]>([{
    id:1,
    content:"Do meditation"
   },{    id:2,
    content:"Do TypeScipt"
},{    id:3,
    content:"Do Walking"
}]);  

   const handleSubmit=(e:any)=>{
       e.preventDefault();
       setTodoList([...todoList,{id:11,content:todo}])
   }
  return <div>
    <form onSubmit={(e)=>handleSubmit(e)}>
     <input type='text' placeholder='Type your task here' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
     <div>{todoList.map((i)=><ul>
     <li> {i.content}</li>
      </ul>)}</div>
      </form>




  </div>
    
  
}

export default App;
