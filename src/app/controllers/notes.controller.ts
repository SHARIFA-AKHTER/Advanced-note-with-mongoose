
import express, { Request, Response } from "express"
import { Note } from "../models/notes.model"


export const notesRoutes = express.Router()
notesRoutes.post('/create-note',async (req: Request, res: Response) => {

    const body = req.body
    
    //Aproach -1 creating a data

    // const myNote = new Note({
    //     title : "Learning Mongoose",
    //     // content : " I am learning Mongoose"

    //     // tags : {
    //     //     label : "database"
    //     // }
    // })

    // await myNote.save()

        //Aproach -2
    const note = await Note.create(body)

    res.status(201).json({
        success : true,
        Message : "Note create successfuly",
        note
    })
})

notesRoutes.get('/',async (req: Request, res: Response) => {

    const notes = await Note.find()

    res.status(201).json({
        success : true,
        Message : "Note create successfuly",
        notes
    })
})
notesRoutes.get('/:noteId',async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findById(noteId)

    res.status(201).json({
        success : true,
        Message : "Note create successfuly",
        note
    })
})
notesRoutes.patch('/:noteId',async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const updatedBody = req.body;
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, {new : true, })
    //   const note = await Note.updateOne({_id: noteId}, {new : true, })
    //   const note = await Note.findOneAndUpdate({_id: noteId}, {new : true, })

    res.status(201).json({
        success : true,
        Message : "Note updated successfuly",
        note
    })
})
notesRoutes.delete('/:noteId',async (req: Request, res: Response) => {
    const noteId = req.params.noteId
    const note = await Note.findByIdAndDelete(noteId)
      const note1 = await Note.deleteOne({_id: noteId})
      const note2 = await Note.findOneAndDelete({_id: noteId})

    res.status(201).json({
        success : true,
        Message : "Note Delete successfuly",
        note
    })
})
