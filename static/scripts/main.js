// Introspection observer to animate in items on scroll
import appearOnScroll from "./appear-on-scroll.js"

appearOnScroll()

function urlChange (history){
    let pushState = history.pushState;
    history.pushState = function(state) {
        setTimeout(() => {
            appearOnScroll();
            console.log(history.state.url);
        }, 1)
        return pushState.apply(history, arguments);
    };
}(window.history);
urlChange(history);

// Navigation Slide-out Functionality
import navigation from "./navigation.js"
