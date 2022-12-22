import Link from "next/link";
import Meta from "../components/global/meta";

export default function Home() {
    return (
        <>
        <link rel="stylesheet" type="text/css" href="/css/home.css"/>
        <Meta/>
        <main>
            <div className='main-container'>
                <section>
                    <h1>Tosy Website Login</h1>
                    {/* <h3>Help section</h3> */}
                </section>
                <section className="navigation-grid">
                    <div className="grid-item">
                        <h3>Events</h3>
                        <img src="" alt="" />
                        <Link href="/events"><h3 className="grid-item-btn">Edit</h3></Link>
                    </div>
                    <div className="grid-item">
                        <h3>Merch</h3>
                        <img src="/imgs/sample-images/church-photo.jpg" alt="" />
                        <Link href="/merch"><h3 className="grid-item-btn">Edit</h3></Link>
                    </div>
                </section>
            </div>
        </main>
        </>
    )
}
