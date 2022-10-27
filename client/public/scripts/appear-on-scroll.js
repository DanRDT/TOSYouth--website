const observedItems = document.querySelectorAll('[data-appear-on-scroll]')

const options = {
    threshold: 0,
    rootMargin: "-15px 0px"
};

const observer = new IntersectionObserver( (items, observer) => {
  let delayNumCount = 1;
  items.forEach(item => {
    if (!item.isIntersecting) {
      return;
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

export default observedItems.forEach(item => {
  observer.observe(item);
})


