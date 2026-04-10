import '../styles/home.css';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className='home-page'>
            <div className="home-content">
                <p className="home-tag">Work in Progress</p>

                <h1>Hop towards greatness</h1>

                <h2>Click the frog in the top left corner to access your tracker!</h2>

                <p className="home-description">
                    This project is a simple habit tracker designed to help users stay
                    organized, manage tasks, and keep up with daily goals in a fun way.
                </p>

                <div className="home-buttons">
                    <Link to="/tracker">
                        <button className="home-btn primary-btn">Open Tracker</button>
                    </Link>

                    <Link to="/about">
                        <button className="home-btn secondary-btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}