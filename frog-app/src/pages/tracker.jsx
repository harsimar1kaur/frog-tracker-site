import './tracker.css';
import frogImg from '../assets/Frogicon.png';

export default function Tracker() {
  return (
    <div className="tracker-page">
      <div className="tracker-left">
        Tracker
      </div>
      <div className="tracker-middle">
        <img src={frogImg} alt="Decoration" className="tracker-image" />
      </div>

      <div className="tracker-right">Frog</div>
    </div>
  );
}
