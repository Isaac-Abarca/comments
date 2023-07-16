import Button from "react-bootstrap/Button";
import "./ReadComments.css";
import { useState } from "react";
import PropTypes from "prop-types";

function ReadComments( {setComments, comments} ) {
  const [commentText, setCommentText] = useState("");
  

  const addComment = (e) => {
    e.preventDefault();
    setComments([...comments, commentText]);
    setCommentText("");
  }

  return (
    <div className="container-coments">
      <div className="container-input">
        <textarea
          className="text-area"
          type="textarea"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>
      <div className="btn-comment">
        <Button className="btn" onClick={addComment} variant="primary">
          Comments
        </Button>
      </div>
    </div>
  );
}

export default ReadComments;

ReadComments.propTypes = {
  setComments: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
};
