import './TodoListItem.css'
import { useState } from 'react'
const TodoListItem=(props)=>
{   const {item,onDelete,onedit}=props
const{title,priority,isCompleted,_id}=item;
   const[isChecked,setChecked]=useState(isCompleted)
     return( 
  
    <div className={`item-card ${priority}`}>
      {  isChecked?( <span class="material-symbols-outlined" onClick={()=>setChecked(false)}>select_check_box </span>): 
      <span className='checkbox pointer' onClick={()=>setChecked(true)}/>}
       <div className={`card-title ${isChecked?'strike':''}`} >
       {title}
       </div>
       
       <div className="badge">{priority}</div>
       <span className="material-symbols-outlined pointer edit" onClick={()=>onedit(item)}>
edit
</span>
       <span className="material-symbols-outlined pointer" onClick={()=>onDelete(_id)} >
delete
</span>
      
       
    </div>
)

}

export default TodoListItem