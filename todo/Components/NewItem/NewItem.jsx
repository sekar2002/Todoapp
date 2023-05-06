import { useEffect, useState } from 'react'
import './NewItem.css'

const NewItem=(props)=>
   
{   const{addItem,edit,edititem}=props
    const p=['low','medium','high']
    const[title,setTitle]=useState('')
    const[priority,setPriority]=useState('low')
    const isedit=Boolean(edit._id)
    useEffect(()=>
    {  if(isedit)
        {
            setTitle(edit.title)
            setPriority(edit.priority)
        }

    },[edit])
    const handleInputChange=(e)=>
{  setTitle(e.target.value)

}
const handleClear=()=>
{
    setTitle('')
    setPriority('')
}

const handleSave=()=>
{   if(!title)
    {
        return
    }
    const obj={
        title,
        priority,
        isCompleted:false
    }
   if(isedit)
   { obj._id=edit._id 
     edititem(obj)
   }
   else{
   addItem(obj)
   }
    setTitle('')
    setPriority('low')
}
    return(<div className="new-item">
           <div className="checkbox"></div>
           <div className='form-container'>
            <input placeholder='Type here...' value={title} onChange={handleInputChange} onClick={()=>setactive(true) } ></input>
  
   {title &&(<div className='hover'>  
    <div className='badge-container'>
              { p.map((prior)=> 
              
              <div key={prior}
                       className={`p-badge ${priority === prior&&'selected'} ${prior}`} onClick={()=>setPriority(prior)}>
                        {prior}
                      </div>)}
            </div>
          
         <div className='button'>
                <button className='primary' onClick={handleSave}>Save</button>
            <button className='secondary'onClick={handleClear}>Clear</button></div>
            </div>) }
    </div>
    </div>)
}
export default NewItem