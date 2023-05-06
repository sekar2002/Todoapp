
import TodoListItem from "./TodolistItem/TodoListItem"

const Todolist=(props)=>
{   const{list,deleteItem,triggeredit}=props
    if(list.length<=0)
    {
        return(<div>
          <center><h1>Congrats your todo list is over!!</h1></center>
        </div>)
    }
   return(
   <>
   {list.map((item,index)=><TodoListItem 
   key={index} 
   item={item} 
   index={index}
   onDelete={deleteItem}
   onedit={triggeredit}/>
    
   )}
    
   </>)
}
export default Todolist