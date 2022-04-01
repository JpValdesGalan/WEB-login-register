const router = require('express').Router();
const userController = require('./users.controller');
const userValidation = require('./users.validation');

/**
 * @swagger
 *   /api/users:
 *     get:
 *       tags:
 *       - Users
 *       description: Get all users
 *       responses: 
 *         200:
 *           description: Array with a list of users
 */
router.get('/', userController.getAll);

/**
 * @swagger
 *   /api/users/signUp:
 *     post:
 *       tags:
 *       - Users
 *       description: JSON with the information of the user to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: user
 *           required: true
 *           description: The user to create
 *           schema:
 *             type: object
 *             properties:
 *               lastName:
 *                 type: string
 *               fisrtName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *       responses: 
 *         200:
 *           description: User was created succesfully
 */
 router.post('/register', userController.create);
/**
 * @swagger
 *   /api/users/{id}:
 *     get:
 *       tags:
 *       - Users
 *       description: Get user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses: 
 *         200:
 *           description: User with the unique ID
 */
router.get('/:id', userController.getOne);

/**
 * @swagger
 *   /api/users/{id}:
 *     put:
 *       tags:
 *       - Users
 *       description: Update user by ID
 *       consumes:
 *         - application/json
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *         - in: body
 *           name: user
 *           required: true
 *           description: The user info to update
 *           schema:
 *             type: object
 * 
 *       responses: 
 *         200:
 *           description: User with the unique ID
 */
 router.put('/:id', userController.update);

/**
 * @swagger
 *   /api/users:
 *     post:
 *       tags:
 *       - Users
 *       description: JSON with the information of the user to create
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: user
 *           required: true
 *           description: The user to create
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *       responses: 
 *         200:
 *           description: User was created succesfully
 */
 router.post('/', userController.create);

 /**
 * @swagger
 *   /api/users/signIn:
 *     post:
 *       tags:
 *       - Users
 *       description: JSON with the email and password to login
 *       consumes:
 *         application/json
 *       parameters:
 *         - in: body
 *           name: user
 *           required: true
 *           description: The user account to login
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *       responses: 
 *         200:
 *           description: Login succesfully
 */
 router.post('/signIn', userValidation.signIn);
/**
 * @swagger
 *   /api/users/{id}:
 *     delete:
 *       tags:
 *       - Users
 *       description: Delete user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           required: true
 *           description: The user's unique ID
 *       responses: 
 *         200:
 *           description: User deleted with the unique ID
 */
router.delete('/:id', userController.delete);

module.exports = router;
