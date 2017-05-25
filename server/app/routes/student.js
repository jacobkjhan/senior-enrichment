var express = require('express');
var router = express.Router();
var models = require('../../../db/models');
var Student= models.User;
module.exports = router;

router.get('/', function (req,res,next){
	Student.findAll()
	.then(students => res.json(students))
	.catch(next);
});

router.post('/', function (req, res, next){
	Student.create(req.body)
	.then(student => res.status(201).json(student))
	.catch(next);
});

router.param('studentId', function (req, res, next, id){
	Student.findById(id)
	.then(function (student){
		if(!student){
			const err = new Error ('Student not found.');
			err.status = 404;
			throw err
		}
		req.student = student;
		next();
		return null;
	})
	.catch(next);
});

router.get("/:studentId", function (req, res){
	res.json(req.campus);
});

router.put('/:studentId', function (req, res, next){
	req.student.update(req.body)
	.then(student => res.status(200).json(student))
	.catch(next);
});

router.delete('/:studentId', function (req, res, next){
	req.student.destroy()
	.then(() => res.status(204).end())
	.catch(next);
});