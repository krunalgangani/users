const express = require("express");
const router = express.Router();
const countryCoutroller = require("../controller/countryCoutroller")

/**
 * @swagger
 *  securityDefinitions: 
 *    Bearer:
 *      type: apiKey
 *      name: Authorization
 *      in: header
 * definitions:
 *  Country:
 *   type: object
 *   properties:
 *    country_name:
 *     type: string
 *     description: name of the Country
 *     required: true
 *     example: "India"
 */

/**
 * @swagger
 * /country:
 *  post:
 *   summary: Create Country
 *   tags :
 *      - Country
 *   description: create Country
 *   parameters:
 *    - in: body
 *      name: body
 *      required: true
 *      description: create for the Country
 *      schema:
 *       $ref: '#/definitions/Country'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Country'
 *   responses:
 *    201:
 *     description: country created succesfully
 *    500:
 *     description: failure in creating country
 */

router.post("/", countryCoutroller.createCountry);

/**
 * @swagger
 * /country:
 *  get:
 *   summary: Get Countries
 *   tags:
 *    - Country
 *   description: get all Countries
 *   responses:
 *    200:
 *     description: data founded successfully
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.get("/", countryCoutroller.fetchCountry);

/**
 * @swagger
 * /country:
 *  put:
 *   summary: Update Country
 *   tags :
 *      - Country
 *   description: Update Country
 *   consumes:
 *    - application/json
 *   produces:
 *    - application/json
 *   parameters:
 *    - name: _id
 *      in: query
 *      description: id of Country
 *      required: true
 *      type: string
 *    - in: body
 *      name: body
 *      required: true
 *      description: body object
 *      schema:
 *       $ref: '#/definitions/Country'
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/definitions/Country'
 *   responses:
 *    204:
 *     description: success
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/definitions/Country'
 *    404:
 *     description: The requested resource could not be found but may be available again in the future
 *    500:
 *     description: error
 */

router.put("/", countryCoutroller.updateCountry);

/**
 * @swagger
 * /country:
 *  delete:
 *   summary: Delete Country
 *   tags :
 *    - Country
 *   description: delete state
 *   parameters:
 *    - name: _id
 *      in: query
 *      description: id of country
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

router.delete("/", countryCoutroller.deleteCountry);

module.exports = router;