import express from 'express'
import {Sequelize,DataTypes } from 'sequelize'
const app = express()
const port = 2000
const conn=new Sequelize('sequelize1','root','',{
    host:'localhost',
    dialect:'mysql'
})
const userSchema= conn.define('user',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING(100),
    },
    email:{
        type:DataTypes.STRING(100),  
    },
    password:{
        type:DataTypes.STRING(150),  
    }
})
conn.sync()
app.get('/users',async (req, res) =>{
    const data=await userSchema.findAll()
    res.json({msg:"success",data})
} )
app.use(express.json());
app.post('/users',async (req, res) =>{
    const {name,email,password}=req.body
    const data=await userSchema.create({
        name,
        email,
        password
    })
    res.json({msg:"success",data})
} )
app.listen(port, () => console.log(`Example app listening on port ${port}!`))