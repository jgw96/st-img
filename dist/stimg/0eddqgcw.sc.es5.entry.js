stimg.loadBundle("0eddqgcw",["exports"],function(e){var t=window.stimg.h,r=function(){function e(){}return e.prototype.componentDidLoad=function(){this.addIntersectionObserver()},e.prototype.componentWillUpdate=function(){this.src!==this.oldSrc&&this.addIntersectionObserver(),this.oldSrc=this.src},e.prototype.handleImage=function(){var e=this.el.shadowRoot.querySelector("img");e.setAttribute("src",e.getAttribute("data-src")),e.onload=function(){e.removeAttribute("data-src")}},e.prototype.addIntersectionObserver=function(){var e=this;this.src&&("IntersectionObserver"in window?(this.io=new IntersectionObserver(function(t){t[0].isIntersecting&&(e.handleImage(),e.removeIntersectionObserver())}),this.io.observe(this.el.shadowRoot.querySelector("img"))):setTimeout(function(){e.handleImage()},300))},e.prototype.removeIntersectionObserver=function(){this.io&&(this.io.disconnect(),this.io=null)},e.prototype.render=function(){return t("img",{"data-src":this.src,alt:this.alt})},Object.defineProperty(e,"is",{get:function(){return"st-img"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{alt:{type:String,attr:"alt"},el:{elementRef:!0},oldSrc:{state:!0},src:{type:String,attr:"src"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-st-img-h{display:block}img.sc-st-img{max-width:100%}"},enumerable:!0,configurable:!0}),e}();e.StImg=r,Object.defineProperty(e,"__esModule",{value:!0})});