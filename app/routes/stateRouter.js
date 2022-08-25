const express = require("express");
const router = express.Router();
const stateController = require("../controller/stateController")

/**
 * @swagger
 * definitions:
 *  State:
 *   type: object
 *   properties:
 *    country_id:
 *     type: string
 *     description: name of the Country
 *     required: true
 *     example: "string"
 *    state_name:
 *     type: string
 *     description: name of the Country
 *     required: true
 *     example: "Gujarat"
 */

/**
 * @swagger
 * /state:
 *  post:
 *   summary: Create State
 *   tags :
 *      - State
 *   description: create State
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: create for the Country
 *      schema:
 *       $ref: '#/definitions/State'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/State'
 *   responses:
 *    201:
 *     description: State created succesfully
 *    500:
 *     description: failure in creating State
 */

router.post("/", stateController.createState);

/**
 * @swagger
 * /state:
 *  get:
 *   summary: Get State
 *   tags:
 *    - State
 *   description: get all States
 *   responses:
 *    200:
 *     description: data founded successfully
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.get("/", stateController.fetchState);


/**
 * @swagger
 * /state:
 *  put:
 *   summary: Update State
 *   tags :
 *      - State
 *   description: Update State
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - name: _id
 *      in: query
 *      description: id of State
 *      required: true
 *      type: string
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/State'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/State'
 *   responses:
 *    204:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/State'
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.put("/", stateController.updateState);

/**
 * @swagger
 * /state:
 *  delete:
 *   summary: Delete State
 *   tags :
 *    - State
 *   description: delete state
 *   parameters:
 *    - name: _id
 *      in: query
 *      description: id of State
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

router.delete("/", stateController.deleteState);

module.exports = router;