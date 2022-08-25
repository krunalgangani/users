const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const multer = require('multer')

//configure multer

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload a valid image file'))
        }
        cb(undefined, true)
    }
})

/**
 * @swagger
 * /user:
 *  get:
 *   summary: Get Users
 *   tags:
 *    - User
 *   description: get all users
 *   responses:
 *    200:
 *     description: data founded successfully
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.get("/", userController.fetchUser);

/**
 * @swagger
 * /user:
 *  post:
 *   summary: Create User
 *   tags :
 *      - User
 *   description: create for the empPicture
 *   parameters:
 *   - name: user_name
 *     in: formData
 *     description: user name
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: email
 *     in: formData
 *     description: user email
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: contact_no
 *     in: formData
 *     description: contact_no of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: date_of_birth
 *     in: formData
 *     description: date_of_birth of user
 *     type: string
 *     format: date
 *     example: "YYYY-MM-DD"
 * 
 *   - name: image
 *     in: formData
 *     description: profile picture
 *     type: file
 * 
 *   - name: country_id
 *     in: formData
 *     description: country_id of country of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: state_id
 *     in: formData
 *     description: state_id of state of user
 *     required: true
 *     type: string
 *     example: string
 *   requestBody:
 *    content:
 *     application/json:
 *   responses:
 *    201:
 *     description: user created succesfully
 *    500:
 *     description: failure in creating user
 */

router.post("/", upload.single('image'), userController.createUser);

/**
 * @swagger
 * /user:
 *  put:
 *   summary: Update User
 *   tags :
 *      - User
 *   description: update for the user
 *   parameters:
 *   - name: _id
 *     in: formData
 *     description: id of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: user_name
 *     in: formData
 *     description: user name
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: email
 *     in: formData
 *     description: user email
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: contact_no
 *     in: formData
 *     description: contact_no of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: date_of_birth
 *     in: formData
 *     description: date_of_birth of user
 *     type: string
 *     format: date
 *     example: "YYYY-MM-DD"
 * 
 *   - name: image
 *     in: formData
 *     description: profile picture
 *     type: file
 * 
 *   - name: country_id
 *     in: formData
 *     description: country_id of country of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   - name: state_id
 *     in: formData
 *     description: state_id of state of user
 *     required: true
 *     type: string
 *     example: string
 * 
 *   requestBody:
 *    content:
 *     application/json:
 *   responses:
 *    201:
 *     description: user updated succesfully
 *    500:
 *     description: failure in updating users
 */

router.put("/", upload.single('image'), userController.updateUser);

/**
 * @swagger
 * /user:
 *  delete:
 *   summary: Delete User
 *   tags :
 *    - User
 *   description: delete user
 *   parameters:
 *    - name: _id
 *      in: query
 *      description: id of user
 *      required: true 
 *      type: string
 *   responses:
 *    200:
 *     description: Record deleted succefully.
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.delete("/", userController.deleteUser);

module.exports = router;