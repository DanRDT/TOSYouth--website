import Link from "next/link";
// import { useRouter } from "next/router";

const Header = () => {
    // const router = useRouter();
    return (
        <header>
            <Link href="/">
                <a className={"logo"}>
                    <img src="/imgs/logo.svg" alt="logo"></img>
                </a>
            </Link>
            <div id="menu-button" data-active="false">
                <div className={"menu-button-line"}></div>
                <div className={"menu-button-line"}></div>
                <div className={"menu-button-line"}></div>
            </div>
            <nav className={"header-nav"} data-visible="false">
                <Link href="/"><a>Home</a></Link>
                <Link href="/about-us"><a>About Us</a></Link>
                <Link href="/events"><a>Events</a></Link>
                <Link href="/merch"><a>Merch</a></Link>
                <Link href="/merch/cart">
                    <div className={"shopping-cart"}>
                        <img src="/imgs/cart-icon.png" alt="cart-icon"></img>
                    </div>
                </Link>
            </nav>
        </header>
    )
    
}

export default Header