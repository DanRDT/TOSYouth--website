import Link from "next/link"

const Header = () => {
    return (
        <header>
            <Link href="/">
                <a className="logo nav-link">
                    <img className="nav-link" src="/imgs/logo.svg" alt="logo"></img>
                </a>
            </Link>
            <div id="menu-button" data-active="false">
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
                <div className="menu-button-line"></div>
            </div>
            <nav className="header-nav" data-visible="false">
                <Link href="/"><a className="nav-link">Home</a></Link>
            </nav>
        </header>
    )
    
}

export default Header