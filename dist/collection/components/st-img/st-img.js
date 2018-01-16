export class StImg {
    constructor() {
        this.fit = false;
    }
    srcChanged() {
        this.addIntersectionObserver();
    }
    componentDidLoad() {
        this.addIntersectionObserver();
    }
    addIntersectionObserver() {
        if (!this.src) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIntersectionObserver();
            this.io = new IntersectionObserver((data) => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.loadSrc = this.src;
                    this.removeIntersectionObserver();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.loadSrc = this.src, 300);
        }
    }
    removeIntersectionObserver() {
        if (this.io) {
            this.io.disconnect();
            this.io = null;
        }
    }
    render() {
        const Img = 'img';
        return (h(Img, { class: { fit: this.fit }, src: this.loadSrc, alt: this.alt, decoding: "async" }));
    }
    static get is() { return "st-img"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return { "alt": { "type": String }, "el": { "elementRef": true }, "fit": { "type": Boolean }, "loadSrc": { "state": true }, "src": { "type": String, "watchCallbacks": ["srcChanged"] } }; }
    static get style() { return "/**style-placeholder:st-img:**/"; }
}
