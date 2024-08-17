import { Sequelize } from "sequelize";



export const conn=new Sequelize('sequelize1','root','',{
    host:'localhost',
    dialect:'mysql'
})