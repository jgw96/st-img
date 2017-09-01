var LazyImg = /** @class */ (function () {
    function LazyImg() {
    }
    LazyImg.prototype.componentWillLoad = function () {
        this.addIntersectionObserver();
    };
    LazyImg.prototype["componentWillUpdate"] = function () {
        if (this.oldSrc && this.src !== this.oldSrc) {
            this.addIntersectionObserver();
        }
        this.oldSrc = this.src;
    };
    LazyImg.prototype.handleImage = function () {
        var image = this.el.querySelector('img');
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = function () {
            image.removeAttribute('data-src');
        };
    };
    LazyImg.prototype.addIntersectionObserver = function () {
        var _this = this;
        if ('IntersectionObserver' in window && this.src !== null) {
            this.io = new IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    _this.handleImage();
                    _this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el.querySelector('img'));
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(function () {
                _this.handleImage();
            }, 300);
        }
    };
    LazyImg.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    LazyImg.prototype.render = function () {
        return (h("img", { "a": { "data-src": this.src }, "p": { "alt": this.alt } }));
    };
    return LazyImg;
}());
export { LazyImg };
