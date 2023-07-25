import styles from './page.module.css'
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    
        <a className="navbar-brand">Personal Website</a>
     

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a className="nav-link">Home</a>
          </li>
          <li className="nav-item">
          
              <a className="nav-link">About</a>
           
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
    </div>
  </nav>
  );
}
