import '../styles/tracker.css';
import frogImg from '../assets/Frogicon.png';
import Modal from '../components/modal';
import { useState } from "react";

export default function Tracker() {

  const [isModalOpen, setIsModalOpen] =useState(false);

  return (
      <div className="tracker-page">
      <div className="tracker-left">
        <div className="tasks-header">
          <h2 className="task-title">Your Tasks
          </h2>
          <button className="green-btn" onClick={() => setIsModalOpen(true)}>
            +
          </button>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <h2>Add Task</h2>
              <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>

        <ul className="task-list">
        </ul>
      </div>

      <div className="tracker-middle">
        <img src={frogImg} alt="Decoration" className="tracker-image" />
      </div>

      <div className="tracker-right">Frog</div>
    </div>
  );
}
