import "../styles/modal.css"

export default function Modal({isOpen, onClose, title, children}) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
                {children || <p>Empty modal</p>}
            </div>
        </div>
    )
}