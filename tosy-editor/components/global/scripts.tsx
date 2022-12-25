import { useEffect } from 'react';

const useScripts = ({pageProps}) => {

    useEffect(() => {
        const navigationButton = document.querySelector('#menu-button')
        const navigation = document.querySelector('nav')

        function handleClick() {
            const visibility = navigation.getAttribute('data-visible')
            if (visibility === "false") {
                navigation.setAttribute("data-visible", "true")
                navigationButton.setAttribute("data-active", "true")
            }
            else if (visibility === "true") {
                navigation.setAttribute("data-visible", "false")
                navigationButton.setAttribute("data-active", "false")
            }
        }
        
        navigationButton.addEventListener('click', handleClick)
        
        return ()=> navigationButton.removeEventListener('click', handleClick)
    }, [])


    useEffect(() => {
        
        const observedItems = document.querySelectorAll('[data-appear-on-scroll]')
        
        const options = {
            threshold: 0,
            rootMargin: "-15px 0px"
        };

        const observer = new IntersectionObserver( (items, observer) => {
            
            let delayNumCount = 1;
            items.map(item => {
                if (!item.isIntersecting) {
                    return;
                }
                else if (item.target.getAttribute('data-appear-on-scroll') === "true") {
                    observer.unobserve(item.target);
                }
                else if (item.isIntersecting) {
                    if (item.target.getAttribute('data-appear-on-scroll-delay') === "true") {
                        const delaySecs = delayNumCount * 100;
                        delayNumCount++;
                        setTimeout(() => {
                            item.target.setAttribute('data-appear-on-scroll', "true");
                        }, delaySecs)
                    }
                    else {
                        item.target.setAttribute('data-appear-on-scroll', "true");
                    }
                observer.unobserve(item.target);
                }
            })
        }, options)

        observedItems.forEach(item => {
            setTimeout(() => {
                observer.observe(item)
            }, 0);
        })

        return ()=> {
            observedItems.forEach(item => {
                observer.unobserve(item)
            }
        )}
    }, [pageProps])
    

}

export default useScripts
