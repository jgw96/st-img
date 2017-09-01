# st-img

st-img is a web component built with [Stencil](https://stenciljs.com/) that allows you to lazy load images as the user scrolls them into the viewport. On supported browsers (Chrome and chrome based browsers, Firefox and Edge) it uses [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to accomplish this functionality. For Safari and IE it simply falls back to setTimeout.


