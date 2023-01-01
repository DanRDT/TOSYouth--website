import Link from "next/link"

const Footer = () => {
    
    return (
        <footer>
            <div className={"separation-line"}></div>
            <nav className={"footer-nav"}>
                <Link href="/"><a className="nav-link">Home</a></Link>
                <Link href="/about-us"><a className="nav-link">About Us</a></Link>
                <Link href="/events"><a className="nav-link">Events</a></Link>
                <Link href="/merch"><a className="nav-link">Merch</a></Link>
            </nav>
            <p className={"copyright"}>© 2022 Tabernacle of Salvation Church Youth</p>
        </footer>
    )
    
}

export default Footer
