import Link from 'next/link';
import Details from '../../components/events/details'

export async function getStaticPaths() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events`)
    const events = await res.json()
    return {
        paths: events.map((event)=>({
            params: {eventId: event.id.toString()},
        })),
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${params.eventId}`);
    const event = await res.json();

    return {
        props: {
            event: event,
        },
        revalidate: Number(process.env.REVALIDATE),
    }
}

export default function Home({event}) {

    return (
        <>    
            <link rel="stylesheet" type="text/css" href="/css/events.css" key="events-css"/>
            <main>
                <div className='main-container'>
                    <section>
                        <h1 >Details</h1>
                        <div className='separation-line'></div>
                        <Details event={event}/>
                        <Link href="/events"><a className='return-button' >Return</a></Link>
                    </section>
                </div>
            </main>
        </>
    )
}
