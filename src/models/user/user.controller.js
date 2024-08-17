import { userSchema } from "../../../databases/models/user.model.js"
export const getAllUser=async (req, res) =>{
    const data=await userSchema.findAll()
    res.json({msg:"success",data})
}
export const addUser=async (req, res) =>{
    const {name,email,password}=req.body
    const data=await userSchema.create({
        name,
        email,
        password
    })
    res.json({msg:"success",data})
}
export const deleteUser=async(req,res)=>{
    const {id}=req.body
    const data=await userSchema.destroy({
        where:{
            id
        }
    })
    if(data){
        res.json({msg:"success",data})
    }else{
        res.json("not fount")
    }
}

export const updateUser=async (req, res) =>{
    const {name,email,password,id}=req.body
    const data=await userSchema.update({name,email,password},{where:{id}})
  
        res.json({msg:"success",data})
    
}