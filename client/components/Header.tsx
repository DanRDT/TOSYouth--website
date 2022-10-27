const Header = () => {
    
    return (
        <header>
            <a className={"logo"} href="/">
                <img src="/imgs/logo.svg" alt="logo"></img>
            </a>
            <div id="menu-button" data-active="false">
                <div className={"menu-button-line"}></div>
                <div className={"menu-button-line"}></div>
                <div className={"menu-button-line"}></div>
            </div>
            <nav className={"header-nav"} data-visible="false">
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/events">Events</a>
                <a href="/merch">Merch</a>
                <div className={"shopping-cart"}>
                    <img src="/imgs/cart-icon.png" alt="cart-icon"></img>
                </div>
            </nav>
        </header>
    )
    
}

export default Header