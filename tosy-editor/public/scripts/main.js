// Introspection observer to animate in items on scroll
import appearOnScroll from "./appear-on-scroll.js"

appearOnScroll()

//refresh querySelector
function urlChange (history){
    let pushState = history.pushState;
    history.pushState = function(state) {
        setTimeout(() => {
            appearOnScroll();
        }, 1)
        return pushState.apply(history, arguments);
    };
}(window.history);
urlChange(history);

// Navigation Slide-out Functionality
import navigation from "./navigation.js"

