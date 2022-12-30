import { useEffect } from 'react'
import Meta from '../../../components/global/meta';

export default function Home() {

  useEffect(() => {
  }, []);
  
  return (
    <>    
        <link rel="stylesheet" type="text/css" href="/css/cart.css"/>
        <Meta title={"Denied"} description={""}/>
        <main>
          <div className='main-container'>
              <h1>Denied</h1>
              <div className="separation-line special"></div>
              <h2 style={{paddingTop: "2rem"}}>Something went wrong</h2>
            </div>
        </main>
    </>
  )
}
