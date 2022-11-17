import Link from 'next/link';
import { useRouter } from 'next/router';
import Details from '../../components/events/details'

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/events/${params.eventId}`);
    const event = await res.json();

    return {
        props: {
            event: event,
        },
    }
}

export default function Home({event}) {
    const router = useRouter();
    const id = router.query.eventId

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
