// import { useEffect, useState } from "react";
import Script from 'next/script';


const Scripts = () => {
    // const [isMounted, setMount] = useState(true);

    // useEffect(() => {
    //     console.log("Set to true");
    //     setMount(false);
    //     return () => {
    //         setMount(true);
    //         console.log("return to false");
    //     }
    // }, [])

    return (
        <Script
            // id="UI Scripts"
            strategy="afterInteractive"
            type="module"
            src="/scripts/main.js"
            onError={() => {
                console.log("UI Scripts Error");
            }}
        /> 
    )
    // return (
    //     <Script
    //         // id="UI Scripts"
    //         strategy="afterInteractive"
    //         type="module"
    //         src="/scripts/test.js"
    //         onReady={() => {
    //            
    //             console.log("ready");
                
    //         }}
    //     /> 
    // )
    // return (
    //     <>
    //         { isMounted ? (
    //             <Script
    //                 // id="UI Scripts"
    //                 strategy="beforeInteractive"
    //                 type="module"
    //                 src="/scripts/main.js"
    //                 onReady={() => {
    //                     console.log("Ready")
    //                 }}
    //             />
    //         ): null}
    //     </>
    // )
    
}

export default Scripts
