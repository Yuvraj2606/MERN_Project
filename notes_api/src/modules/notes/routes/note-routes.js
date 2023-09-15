
import express from 'express';
import {NOTE_ROUTES} from "../../../shared/utils/app-constants.js";
import noteController from '../controller/note-controller.js';
const noteRoutes = express.Router();

noteRoutes.post(NOTE_ROUTES.ADD,noteController.addNote);
noteRoutes.get(NOTE_ROUTES.GET_ALL_NOTES,noteController.getAllNotes );
noteRoutes.delete('/deletenote',noteController.deleteTask);
noteRoutes.patch('/')
export default noteRoutes;
