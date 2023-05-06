const Todo=require('../model/todo')
exports.getAllTodoList=async(req,res)=>
{
    try{
              const list=await Todo.find()
              return res.status(200).json(

                {
                    data:list,
                    length:list.length
                }
              )
    }
    catch(error)
    {
        return res.status(500).json({
            msg:'Internal server error'
        })
    }
}
exports.createTodo=async(req,res)=>
{
    try{
        const newTodo=await Todo.create(req.body)
        return res.status(201).json(
            {
                data:newTodo
            }
        )
    }
    catch(error)
    {
        return res.status(500).json({
            msg:'Internal server error'
        })
    }
}
exports.getTodoById=async(req,res)=>
{
    try{
        const todo=await Todo.findById(req.params.id)
        if(todo)
        {
            return res.status(200).json(
                {
                    data:todo
                }
            )
        }
        else{
            return res.status(404).json(
                {
                    msg:'not found'
                }
            )
        }
    }
    catch(error)
    {
        return res.status(500).json({
            msg:'Internal server error'
        })
    }
}
exports.deletebyid=async(req,res)=>
{
    try{  await Todo.findByIdAndRemove(req.params.id)//findByIdAndUpdate
          return(res.status(200).json(
            {
                msg:'deleted'
            }
          ))

    }
    catch(error)
    {return res.status(500).json({
        msg:'couldnot delete'
    })

    }
}
exports.updateById = async (req,res)=>
{
    try{
        const todo=await Todo.findById(req.params.id)
        const {title,priority,isCompleted}=req.body
        
        if(todo)
        {   
            await Todo.findByIdAndUpdate(req.params.id,{title,priority,isCompleted})
            return res.status(200).send("updated")
        }
    }
    catch(error)
    {
        return res.status(404).send("could not update")
    }
}