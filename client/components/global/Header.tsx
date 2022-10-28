// import Link from "next/link";
// import { useRouter } from "next/router";

const Header = () => {
    // const router = useRouter();
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
                {/* <div onClick={() => router.push({ pathname: '/' })}>Home</div> */}
                {/* <div onClick={() => router.push({ pathname: '/about-us' })}>Home</div> */}
                <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/events">Events</a>
                <a href="/merch">Merch</a>
                {/* <Link href="/"><a>Home</a></Link>
                <Link href="/about-us"><a>About Us</a></Link>
                <Link href="/events"><a>Events</a></Link>
                <Link href="/merch"><a>Merch</a></Link> */}
                <div className={"shopping-cart"}>
                    <img src="/imgs/cart-icon.png" alt="cart-icon"></img>
                </div>
            </nav>
        </header>
    )
    
}

export default Header