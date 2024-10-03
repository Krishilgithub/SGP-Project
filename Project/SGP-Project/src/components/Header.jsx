export const Header = () => {
    return (
        <>
            <header className="header_wrapper">
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container">

                        <a className="navbar-brand" href="#">
                            <h2 style={{ color: '#c6c6c6' }}>AHK</h2>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <i className="fas fa-stream navbar-toggler"></i>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                            <ul className="navbar-nav menu-navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#rooms">Rooms</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Service</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link" href="/login">Log In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};