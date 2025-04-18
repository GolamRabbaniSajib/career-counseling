import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded-lg border shadow-lg max-w-4xl w-full">
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-4">All Comments</h3>
        <div className="my-4">
          {comments.length === 0 ? (
            <p className="text-gray-400 text-center">No comments yet. Be the first to comment!</p>
          ) : (
            <ul className="space-y-3">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-4 border border-gray-300 rounded-lg bg-green-100 shadow-sm hover:bg-green-200 transition duration-300"
                >
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="Type your comment here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none"
          rows="4"
        />
        <button
          type="submit"
          className="btn btn-primary px-6 py-2 rounded-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
