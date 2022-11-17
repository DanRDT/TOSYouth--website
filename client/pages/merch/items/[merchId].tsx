import { useRouter } from 'next/router';
import Item from '../../../components/merch/item/item'


export default function Home() {
    const router = useRouter();
    const id = router.query.merchId

    return (
        <>    
            <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
            <main>
                <div className='main-container'>
                <div className="separation-line"></div>
                <Item id={id}/>
                </div>
            </main>
        </>
    )
}
