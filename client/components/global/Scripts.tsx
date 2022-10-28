'use client';
import { useEffect, useState } from "react";
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
            onReady={() => {
                // console.log("Ready");
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
    //     <Script
    //         // id="UI Scripts"
    //         strategy="afterInteractive"
    //         type="module"
    //         src="/scripts/test.js"
    //         onReady={() => {
    //             const observedItems = document.querySelectorAll('[data-appear-on-scroll]')

    //             const options = {
    //                 threshold: 0,
    //                 rootMargin: "-15px 0px"
    //             };

    //             const observer = new IntersectionObserver( (items, observer) => {
    //             let delayNumCount = 1;
    //             items.forEach(item => {
    //                 if (!item.isIntersecting) {
    //                 return;
    //                 }
    //                 else if (item.isIntersecting) {
    //                 if (item.target.getAttribute('data-appear-on-scroll-delay') === "true") {
    //                     const delaySecs = delayNumCount * 100;
    //                     delayNumCount++;
    //                     setTimeout(() => {
    //                     item.target.setAttribute('data-appear-on-scroll', "true");
    //                     }, delaySecs)
    //                 }
    //                 else {
    //                     item.target.setAttribute('data-appear-on-scroll', "true");
    //                 }
    //                 observer.unobserve(item.target);
    //                 }
    //             })
    //             }, options)

    //             observedItems.forEach(item => {
    //             observer.observe(item);
    //             });
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
