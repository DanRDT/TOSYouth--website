import { useEffect } from 'react';

const useScripts = ({pageProps}) => {

    useEffect(() => {
        const navigationButton = document.querySelector('#menu-button')
        const navigation = document.querySelector('nav')

        const handleClick = () => {
            const visibility = navigation.getAttribute('data-visible')
            if (visibility === "false") {
                navigation.setAttribute("data-visible", "true")
                navigationButton.setAttribute("data-active", "true")
                document.querySelector('body').style.overflowY = "hidden"
            }
            else if (visibility === "true") {
                navigation.setAttribute("data-visible", "false")
                navigationButton.setAttribute("data-active", "false")
                document.querySelector('body').style.overflowY = "visible"
            }
        }

        navigationButton.addEventListener('click', handleClick)
        
        
        const handleRoutingClick = () => {
            navigation.setAttribute("data-visible", "false")
            navigationButton.setAttribute("data-active", "false")
            document.querySelector('body').style.overflowY = "visible"
        }

        const headerLinks = document.querySelectorAll('.header-link')

        headerLinks.forEach((headerLink) => {
            headerLink.addEventListener('click', handleRoutingClick)
        })
        
        
        navigationButton.addEventListener('click', handleClick)

        return () => {
            navigationButton.removeEventListener('click', handleClick)

            headerLinks.forEach((headerLink) => {
                headerLink.removeEventListener('click', handleRoutingClick)
            })
        }

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
