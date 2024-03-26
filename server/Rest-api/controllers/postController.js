const { postModel } = require('../models');
const { newComment } = require('./commentController')

function getPosts(req, res, next) {
    postModel.find()
        .populate('userId')
        .then(posts => res.json(posts))
        .catch(next);
}

function getPost(req, res, next) {
    const { postId } = req.params;

    postModel.findById(postId)
        .populate({
            path : 'comments',
            populate : {
              path : 'userId'
            }
          })
        .then(post => res.json(post))
        .catch(next);
}

function createPost(req, res, next) {
    const { postName, commentText } = req.body;
    const { _id: userId } = req.user;

    postModel.create({ postName, userId, subscribers: [userId] })
        .then(post => {
            newComment(commentText, userId, post._id)
                .then(([_, updatedPost]) => res.status(200).json(updatedPost))
        })
        .catch(next);
}

function subscribe(req, res, next) {
    const postId = req.params.postId;
    const { _id: userId } = req.user;
    postModel.findByIdAndUpdate({ _id: postId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedPost => {
            res.status(200).json(updatedPost)
        })
        .catch(next);
}

module.exports = {
    getPosts,
    createPost,
    getPost,
    subscribe,
}
