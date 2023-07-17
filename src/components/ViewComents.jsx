import PropTypes from "prop-types";
import Comments from "./Comments";
import "./ViewComments.css";

function ViewComments({ comments, setComments }) {
  const onDelete = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className="container-comments">
      {comments.map((comment, index) => (
        <div className="container-comments-actions" key={index}>
          <Comments comments={comment} onDelete={() => onDelete(index)} />
          <div className="actions">
            <a className="danger" onClick={() => onDelete(index)}>
              Eliminar
            </a>
            <a className="warning">Editar</a>
            <a className="success">Responder</a>
          </div>
        </div>
      ))}
    </div>
  );
}

ViewComments.propTypes = {
  comments: PropTypes.array.isRequired,
  setComments: PropTypes.func.isRequired,
};

export default ViewComments;
