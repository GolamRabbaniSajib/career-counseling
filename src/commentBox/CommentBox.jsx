import React, { useState } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (e) => {
    const co = e.target.value;
    setComment(co);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="mx-auto p-4 bg-white rounded-lg border">
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">All Comments Are Here</h3>
        <div className="my-6 py-3">
          {comments.length === 0 ? (
            <p className="text-gray-500">please submit a comment...</p>
          ) : (
            <ul className="space-y-2">
              {comments.map((comment, index) => (
                <li
                  key={index}
                  className="p-2 border border-gray-300 rounded-lg bg-green-200"
                >
                  {comment}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <h2 className="text-xl font-bold mb-4">Type a Comment</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={handleInputChange}
          placeholder="your comment..."
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="btn btn-neutral"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
