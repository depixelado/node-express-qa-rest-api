'use strict';

var express = require('express');
var router = express.Router();

// GET /questions
// Route for questions collection
router.get('/', function(req, res){
	res.json({response: 'You sent me a GET Request'});
});

// POST /questions
// Route for creating a question
router.post('/', function(req, res){
	res.json({
		response: 'You sent me a POST Request',
		body: req.body
	});
});

// GET /questions/:qID
// Route for specific questions
router.get('/:qID', function(req, res){
	res.json({response: 'You sent me a GET Request for ID:' + req.params.qID });
});

// PUT /questions/:qID
// Route for edit a specific question
router.put('/:qID', function(req, res){
	res.json({
		response: 'You sent me a PUT request to /question',
		questionId: req.params.qID,
		body: req.body
	});
});

// DELETE /questions/:qID
// Route for edit a specific answer
router.delete('/:qID', function(req, res){
	res.json({
		response: 'You sent me a DELETE request to /answers',
		questionId: req.params.qID,
	});
});

// GET /questions/:qID/answers
// Route for answers collection
router.get('/:qID/answers', function(req, res){
	res.json({response: 'You sent me a GET Request'});
});

// POST /questions/:qID/answers
// Route for creating an answer
router.post('/:qID/answers', function(req, res){
	res.json({
		response: 'You sent me a POST request to /answers',
		questionId: req.params.qID, 
		body: req.body
	});
});

// PUT /questions/:qID/answers/:aID
// Route for edit a specific answer
router.put('/:qID/answers/:aID', function(req, res){
	res.json({
		response: 'You sent me a PUT request to /answers',
		questionId: req.params.qID,
		answerId: req.params.aID,
		body: req.body
	});
});

// DELETE /questions/:qID/answers/:aID
// Route for edit a specific answer
router.delete('/:qID/answers/:aID', function(req, res){
	res.json({
		response: 'You sent me a DELETE request to /answers',
		questionId: req.params.qID,
		answerId: req.params.aID,
	});
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Route for voting an specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res){
	res.json({
		response: 'You sent me a POST request to /vote' + req.params.dir,
		questionId: req.params.qID,
		answerId: req.params.aID,		
		vote: req.params.dir
	});
});

module.exports = router;