
import NewItem from '../Components/NewItem/NewItem'
import Todolist from '../Components/Tododlist/Todolist'
import './App.css'
import {  toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
toast.configure()
import { useEffect, useState } from "react"

   
const App=()=> {
       const[list,setList]=useState([])
       const[edit,setedit]=useState({})
       useEffect(()=>
       {
        fetch('http://localhost:3000/api/v2/todo').then((res)=>
        {
            res.json().then((json)=>
            {
                setList(json.data)
            })
        })
       },[])    
   const deleteItem=(_id)=>
   {
    fetch(`http://localhost:3000/api/v2/todo/${_id}`,
    {method:'DELETE'
    } ).then((res)=>
    {
        const filteredList=list.filter((item)=>(item._id!==_id))
        setList([...filteredList])
        toast.success("One item deleted")
    })

   }

  const triggeredit=(item)=>
  {
    setedit(item)
  }
  const edititem=(updateditem)=>
  {     fetch(`http://localhost:3000/api/v2/todo/${updateditem._id}`,{
    method:'PUT',
    headers:
    {
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/json'
    },
    body:JSON.stringify(updateditem)
   }).then((res)=>{
        const l=list.map((item)=>{
        if(item._id === updateditem._id)
        {
            return updateditem
        }
        else{ 
        return item
        }
        
     })
     setList([...l])
    })

}
        
         
   const addItem=(item)=>
   {   
       
      
       fetch('http://localhost:3000/api/v2/todo',{
        method:'POST',
        headers:
        {
            'Accept':'application/json,text/plain,*/*',
            'Content-type':'application/json'
        },
        body:JSON.stringify(item)
       }).then((res)=>
       {
            res.json().then(json=>
                {
                    setList((prev)=>[json.data,...prev])
                })
       })
       toast.success("added")
   } 

       return(
       <div className='App' >
        <h1 className="title">Todo List</h1>
        <span className='ded'>filter</span>
      <NewItem addItem={addItem} edit={edit} edititem={edititem}/>
       <Todolist list={list} deleteItem={deleteItem} triggeredit={triggeredit} /></div>
        
       )
}

export default App
