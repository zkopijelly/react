import express from 'express'
import mongoose, { Schema } from 'mongoose'

const router = express.Router()

const userSchema = new Schema({
  first_name: String,
  last_name: String
})

const User = mongoose.model('User', userSchema)

router.get('/', (req, res) => {
    res.status(200).json({
        data: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
              },
              {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
              },
              {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
              }
        ]
    })
})

// POST METHOD - CREATE
router.post('/user', async (req, res) => {
  // code for creating a user
  console.log("Request Body", req)

  if (req.body === undefined || null) {
    return res.status(400).json({message: "Bad Request - body is required"})
  }
  try{
    const newUser = new User(req.body);
    const insertNewUser = await newUser.save();

    res.status(201).json({message: "User Created", data: insertNewUser});
  } catch (error) {
    res.status(400).json({message: 'User not created'})
  }
})

// DELETE METHOD [DELETE]
router.delete('/user/:id', async (req, res) => {
  console.log(req.params)
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (user) {
      const deletedUser = await User.findByIdAndDelete(id)
      res.status(204).json({ message: "User deleted successfully!!", data: deletedUser})
    } else {
      res.status(404).json({ message: "User not found"})
    }
  } catch (error) {
    console.error('Error deleting data')
  }
})
export default router;