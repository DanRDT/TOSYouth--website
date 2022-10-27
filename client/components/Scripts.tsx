import Script from 'next/script';


const Scripts = () => {
    
    return (
        <Script
            id="UI Scripts"
            strategy="afterInteractive"
            type="module"
            src="/scripts/main.js"
            onError={() => {
                console.error('UI Scripts failed');
            }}
        />
    )
    
}

export default Scripts