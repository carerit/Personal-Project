import Link from "next/link";
import styles from "./page.module.css"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className={styles.noUnderline} href="/">
            <span className="navbar-brand">Personal Website</span>
          </Link>

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
                <Link className={styles.noUnderline} href="/">
                  <span className="nav-link">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className={styles.noUnderline}   href="/about">
                  <span className="nav-link">About</span>
                </Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </div>
      </nav>
    );
  }