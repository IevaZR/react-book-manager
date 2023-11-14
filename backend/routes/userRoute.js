import express from "express"
import { createUser, deleteUser, getAllUsers, getUser, loginUser, updateUser } from "../controllers/userController.js"

const router = express.Router()

router.post('/create-user', createUser)
router.get("/", getAllUsers)
router.get("/get-user/:email", getUser)
router.delete("/delete-user/:id", deleteUser)
router.put("/update-user/:email", updateUser)
router.post('/login-user', loginUser)

export default router