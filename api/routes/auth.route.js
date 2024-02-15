import express from 'express'
import {signup,google,signin, signOut} from '../controllers/auth.controller.js';

const router=express.Router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post('/google',google)
router.get('signOut',signOut)


export default router;