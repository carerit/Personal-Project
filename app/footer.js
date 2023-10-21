import styles from "./page.module.css";

export default function FooterBar() {
  return (
    // <div className={styles.footer}>
    //   <p>
    //     copyright &copy;{" "}
    //     <a
    //       href="https://gossamer-comet-pie.glitch.me/#home"
    //       target="_blank"
    //       className={styles.noUnderline}
    //     >
    //       Kevin Li
    //     </a>{" "}
    //   </p>
    // </div>

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 border-top fixed-bottom">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg
              width="46px"
              height="46px"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(-1, 0, 0, 1, 0, 0)"
              stroke="#af1aff"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M247.327 154.684C241.287 129.635 239.633 106.118 259.961 133.946"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M287.721 129.075C300.929 107.948 301.616 118.967 299.614 143.417"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M297.714 146.304C304.632 172.137 312.389 210.647 296.604 234.569C321.533 244.234 339.049 249.067 349.151 249.067C364.305 249.067 364.014 242.903 371 249.067"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M241.084 160.236C230.255 170.161 219.178 181.252 215.545 195.768"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M215.545 190.835C144.168 178.002 105.797 204.852 91.9119 246.772C26.4829 264.873 12.089 276.372 48.7303 281.268"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M165.859 210.275C169.397 208.668 177.78 208.668 183.116 210.469C247.613 232.24 73.0129 252.398 163.134 252.398C170.724 252.398 187.233 251.024 189.936 251.024"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M292.749 169.119C302.64 192.481 265.664 201.32 263.412 173.603"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M281.214 187.995C275.94 185.649 280.909 185.292 282.169 184.664"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
                <path
                  d="M245.526 213.534C249.958 216.297 251.405 221.914 252.84 226.795C263.52 263.112 250.534 243.316 297.643 246.457C304.236 246.897 328.648 250.048 326.444 244.171"
                  stroke="#8a007e"
                  strokeOpacity="0.9"
                  strokeWidth="16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />{" "}
              </g>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Pawsome
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              target="_blank"
              href="https://www.linkedin.com/in/wen-hao-kevin-li"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                fill="blue"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://wenhaoli-about.glitch.me/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                fill="pink"
                className="bi bi-house-heart"
                viewBox="0 0 16 16"
              >
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/carerit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                fill="currentColor"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
