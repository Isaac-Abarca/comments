import "./Comments.css";
import PropTypes from "prop-types";

function Comments({comments}) {
  return (
    <div className="comments">
      <div className="cont-izq">
        <div className="user"></div>
      </div>
      <div className="cont-der">
        <div>
          <div className="info">
            <p>User</p>
            <p>fecha</p>
          </div>
          <div className="comment">
            <p>{comments}</p>
          </div>
        </div>
        <div className="actions">
          <a className="danger">Eliminar</a>
          <a className="warning">Editar</a>
          <a className="success">Responder</a>
        </div>
      </div>
    </div>
  );
}

export default Comments;

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
};
