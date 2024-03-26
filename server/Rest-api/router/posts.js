const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { postController, commentController } = require('../controllers');

// middleware that is specific to this router

router.get('/', postController.getPosts);
router.post('/', auth(), postController.createPost);

router.get('/:postId', postController.getPost);
router.post('/:postId', auth(), commentController.createComment);
router.put('/:postId', auth(), postController.subscribe);
router.put('/:postId/comments/:commentId', auth(), commentController.editComment);
router.delete('/:postId/comments/:commentId', auth(), commentController.deleteComment);

// router.get('/my-trips/:id/reservations', auth(), themeController.getReservations);

module.exports = router