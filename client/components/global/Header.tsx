import Link from "next/link";

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
                <Link href="/about-us"><a className="nav-link">About Us</a></Link>
                <Link href="/events"><a className="nav-link">Events</a></Link>
                <Link href="/merch"><a className="nav-link">Merch</a></Link>
                <Link href="/merch/cart">
                    <a className="shopping-cart">
                        <img className="nav-link" src="/imgs/cart-icon.png" alt="cart-icon"></img>
                    </a>
                </Link>
            </nav>
        </header>
    )
    
}

export default Header