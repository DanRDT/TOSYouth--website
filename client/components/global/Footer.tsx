import Link from "next/link"

const Footer = () => {
    
    return (
        <footer>
            <div className={"seperation-line"}></div>
            <nav className={"footer-nav"}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about-us"><a>About Us</a></Link>
                <Link href="/events"><a>Events</a></Link>
                <Link href="/merch"><a>Merch</a></Link>
                {/* <a href="/">Home</a>
                <a href="/about-us">About Us</a>
                <a href="/events">Events</a>
                <a href="/merch">Merch</a> */}
            </nav>
            <p className={"copyright"}>© 2022 Tabernacle of Salvation Church Youth</p>
        </footer>
    )
    
}

export default Footer