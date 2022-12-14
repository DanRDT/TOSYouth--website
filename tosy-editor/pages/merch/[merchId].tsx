import { ItemProvider } from "../../components/context/itemContext"
import mongoose from "mongoose"

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${params.merchId}`)
    
    return {
        props: {
            item: await res.json(),
        }
    }
}

export default function Home({item}) {

    return (
        <>    
        <ItemProvider>
            <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
            <main>
                <div className='main-container'>
                <div className="separation-line"></div>
                {/* <Item item={item}/> */}
                </div>
            </main>
        </ItemProvider>
        </>
    )
}
