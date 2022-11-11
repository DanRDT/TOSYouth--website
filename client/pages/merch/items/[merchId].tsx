import { useRouter } from 'next/router';
import Item from '../../../components/merch/item/main'


export default function Home() {
    const router = useRouter();
    const id = router.query.merchId

    return (
        <>    
            <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
            <main>
                <div className='main-container'>
                <div className="seperation-line"></div>
                <Item id={id}/>
                </div>
            </main>
        </>
    )
}
