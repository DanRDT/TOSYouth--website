'use client';
import { useEffect, useState } from "react";
import Script from 'next/script';


const Scripts = () => {
    // const [isMounted, setMount] = useState(false);

    // useEffect(() => {
    //     console.log("Set to true");
    //     setMount(true);
    //     return () => {
    //         setMount(false);
    //         console.log("return to false");
    //     }
    // }, [])

    return (
        <Script
            // id="UI Scripts"
            strategy="afterInteractive"
            type="module"
            src="/scripts/main.js"
            onReady={() => {
                console.log("Ready");
            }}
            onLoad={() => {
                console.log("Loaded");
            }}
            onError={() => {
                console.log("Error");
            }}
        /> 
    )
    // return (
    //     <>
    //         { isMounted ? (
    //             <Script
    //                 // id="UI Scripts"
    //                 strategy="afterInteractive"
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
