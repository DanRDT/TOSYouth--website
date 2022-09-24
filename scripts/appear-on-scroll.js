const observedItems = document.querySelectorAll('[data-appear-on-scroll]')

const options = {
    threshold: 0,
    rootMargin: "-15px"
};

const observer = new IntersectionObserver( (items, observer) => {
    items.forEach(item => {
        if (!item.isIntersecting) {
          return;
        }
        else if (item.isIntersecting) {
          item.target.setAttribute('data-appear-on-scroll', "true");
          observer.unobserve(item.target);
        }
    })
}, options)

export default observedItems.forEach(item => {
    observer.observe(item);
    console.log(item)
})
