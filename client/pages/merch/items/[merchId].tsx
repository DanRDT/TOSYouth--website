import Item from '../../../components/merch/item/item'
import { ItemProvider } from "../../../components/context/itemContext"

// export async function getStaticPaths() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/items`)
//     const items = await res.json()
//     return {
//         paths: items.map((item)=>({
//             params: {merchId: item.id.toString()},
//         })),
//         fallback: false
//     }
// }

// export async function getStaticProps({params}) {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${params.merchId}`)
    
//     return {
//         props: {
//             item: await res.json(),
//         },
//         revalidate: Number(process.env.REVALIDATE),
//     }
// }
export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${params.merchId}`)
    
    return {
        props: {
            item: await res.json(),
        },
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
                <Item item={item}/>
                </div>
            </main>
        </ItemProvider>
        </>
    )
}
