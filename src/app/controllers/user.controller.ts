
import express, { Request, Response } from "express"
import { user } from "../models/users.model"
import { User } from "../models/user.model"



export const usersRoutes = express.Router()
usersRoutes.post('/create-user',async (req: Request, res: Response) => {

    const body = req.body
    
    const user = await User.create(body)

    res.status(201).json({
        success : true,
        Message : "user create successfuly",
        user
    })
})

usersRoutes.get('/',async (req: Request, res: Response) => {

    const users = await User.find()

    res.status(201).json({
        success : true,
        Message : "all users retrived uccessfuly",
        users
    })
})
usersRoutes.get('/:userId',async (req: Request, res: Response) => {
    const userId = req.params.userId
    const user = await User.findById(userId)

    res.status(201).json({
        success : true,
        Message : "user retrived successfuly",
        user
    })
})
usersRoutes.patch('/:userId',async (req: Request, res: Response) => {
    const userId = req.params.userId
    const updatedBody = req.body;
    const user = await User.findByIdAndUpdate(userId, updatedBody, {new : true, })
    //   const user = await user.updateOne({_id: userId}, {new : true, })
    //   const user = await user.findOneAndUpdate({_id: userId}, {new : true, })

    res.status(201).json({
        success : true,
        Message : "user updated successfuly",
        user
    })
})
usersRoutes.delete('/:userId',async (req: Request, res: Response) => {
    const userId = req.params.userId
    const user = await User.findByIdAndDelete(userId)
      const user1 = await User.deleteOne({_id: userId})
      const user2 = await User.findOneAndDelete({_id: userId})

    res.status(201).json({
        success : true,
        Message : "user Delete successfuly",
        user
    })
})
