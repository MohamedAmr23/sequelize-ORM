import { conn } from '../dbConnections.js'
import {DataTypes } from 'sequelize'
export const userSchema= conn.define('user',{
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