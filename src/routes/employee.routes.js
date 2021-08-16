const express= require('express');
const router= express.Router()

const employeeController= 
require('../controllers/employee.controller');

//retrieve all employees
router.get('/', employeeController.findAll);

//create new employee
router.post('/', employeeController.create);

//retrieve a single employee with id
router.get('/:id', employeeController.findById);

//update a employee with id
router.put('/:id', employeeController.update);

//delete a employee with id
router.delete('/:id', employeeController.delete);

module.exports= router;