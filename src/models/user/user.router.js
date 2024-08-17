import express from 'express'
import { getAllUser,addUser,deleteUser,updateUser } from './user.controller.js'
const router=express.Router()
router.get('/',getAllUser )

router.post('/',addUser )

// delete
router.delete('/',deleteUser)

router.put('/',updateUser )

export default router