import { ItemProvider } from "../../components/context/itemContext"
import { UpdatedItemProvider } from "../../components/context/updatedItemContext"
import Item from "../../components/merch/item/main"

export async function getServerSideProps({params}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/merch/${params.merchId}`)
    const data = await res.json()
    
    if (!data) {
        return {
          notFound: true,
        }
    }

    return {
        props: {
            item: data,
        }
    }
}

export default function Home({item}) {

    return (
        <>    
        <ItemProvider>
            <UpdatedItemProvider>
                <link rel="stylesheet" type="text/css" href="/css/merch-item.css"/>
                <main>
                    <div className='main-container'>
                    <div className="separation-line"></div>
                    <Item item={item}/>
                    </div>
                </main>
            </UpdatedItemProvider>
        </ItemProvider>
        </>
    )
}
