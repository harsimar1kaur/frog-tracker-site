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
          <h2 className="task-title">Your Tasks</h2>
          <button className="plus-btn" onClick={() => setIsModalOpen(true)}>+</button>
          </div>
            
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              
              <h2 className="modal-title">Add Task</h2>
              
              
              <form className="task-form">
                
                <label htmlFor="taskTitle">Task Title</label>
                <input
                id="taskTitle"
                name="taskTitle"
                type="text"
                placeholder='Name your task!'
                />

                <label htmlFor="taskDescr">Describe Your Task</label>
                <textarea
                id="taskDescr"
                name="taskDescr"
                type="text"
                placeholder='Describe your task!'
                rows="5"
                />

                <div className="priority-selector">
                  <span className="priority-option">Low</span>
                  <span className="priority-option">Medium</span>
                  <span className="priority-option">High</span>
                </div>

                <div className="form-buttons">
                <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button onClick={() => setIsModalOpen(false)}>Add Task</button>
                </div>
              
              </form>
            </Modal>
      </div>

      <div className="tracker-middle">
        <img src={frogImg} alt="Decoration" className="tracker-image" />
      </div>

      <div className="tracker-right">Frog</div>
    </div>
  );
}
