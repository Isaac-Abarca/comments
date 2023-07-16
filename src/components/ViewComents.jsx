import PropTypes from "prop-types";

import "./ViewComments.css";
import Comments from "./Comments";

function ViewComments({comments}) {
  return (
    <div className="container-comments">
      {comments.map((comment, index) => (
        <div key={index}>
          <Comments comments={comment} />
        </div>
      ))}
    </div>
  );
}

export default ViewComments;

ViewComments.propTypes = {
  comments: PropTypes.array.isRequired,
};
