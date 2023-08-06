import "./Modal.css";

function Modal({ text, onModalClick }) {
  return (
    <>
      <div className="modal">
        <p className="modal__title">{text}</p>
        <div className="modal__buttons">
          <button
            className="btn btn__cancel"
            onClick={() => {
              onModalClick()
            }}
          >
            Cancel
          </button>
          <button
            className="btn"
            onClick={() => {
              onModalClick()
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
