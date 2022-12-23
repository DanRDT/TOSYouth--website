import Script from 'next/script';

// import extra scripts

const Scripts = () => {
    return (
        <Script
            strategy="afterInteractive"
            type="module"
            src="/scripts/main.js"
            onError={() => {
                console.log("UI Scripts Error");
            }}
        /> 
    )
   
}

export default Scripts