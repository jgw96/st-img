/*! Built with http://stenciljs.com */
App.loadComponents(

/**** module id (dev mode) ****/
"st-img",

/**** component modules ****/
function importComponent(exports, h, t, Context, publicPath) {
var StImg = /** @class */ (function () {
    function StImg() {
    }
    StImg.prototype.componentWillLoad = function () {
        this.addIntersectionObserver();
    };
    StImg.prototype["componentWillUpdate"] = function () {
        if (this.oldSrc && this.src !== this.oldSrc) {
            this.addIntersectionObserver();
        }
        this.oldSrc = this.src;
    };
    StImg.prototype.handleImage = function () {
        var image = this.el.querySelector('img');
        image.setAttribute('src', image.getAttribute('data-src'));
        image.onload = function () {
            image.removeAttribute('data-src');
        };
    };
    StImg.prototype.addIntersectionObserver = function () {
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
    StImg.prototype.removeIntersectionObserver = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    };
    StImg.prototype.render = function () {
        return (h("img", { "a": { "data-src": this.src }, "p": { "alt": this.alt } }));
    };
    return StImg;
}());

exports['ST-IMG'] = StImg;
},


/***************** st-img *****************/
[
/** st-img: tag **/
"ST-IMG",

/** st-img: members **/
[
  [ "alt", /** prop **/ 1 ],
  [ "el", /** element ref **/ 7 ],
  [ "oldSrc", /** state **/ 5 ],
  [ "src", /** prop **/ 1 ]
],

/** st-img: host **/
{}

]
)