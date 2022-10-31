let observedItems = [];


function getItems() {
  observedItems = document.querySelectorAll('[data-appear-on-scroll]')
}

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


function observe() {
  getItems();
  observedItems.forEach(item => {
    return (observer.observe(item));
  })
};


export default function reobserve() {

  observe();
  
  const interval100 = setInterval(() => {
    observe();
  }, 100);
  
  
  setTimeout(() => {
    clearInterval(interval100)

    const interval500 = setInterval(() => {
      observe();
    }, 500);

    setTimeout(() => {
      clearInterval(interval500)
    }, 4500);
  

  }, 500);

};



