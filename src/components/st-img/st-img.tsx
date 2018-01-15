import { Component, Element, Prop, Watch, State } from '@stencil/core';


@Component({
  tag: 'st-img',
  styleUrl: 'st-img.scss',
  shadow: true
})
export class StImg {

  private io: IntersectionObserver;

  @Element() el: HTMLElement;

  @State() loadSrc: string;

  @Prop() fit = false;
  @Prop() alt: string;
  @Prop() src: string;
  @Watch('src')
  srcChanged() {
    this.addIntersectionObserver();
  }

  componentDidLoad() {
    this.addIntersectionObserver();
  }

  private addIntersectionObserver() {
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
      })

      this.io.observe(this.el);
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => this.loadSrc = this.src, 300);
    }
  }

  private removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    const Img = 'img' as any;
    return (
      <Img
        class={{fit: this.fit}}
        src={this.loadSrc}
        alt={this.alt}
        decoding="async"></Img>
    );
  }
}
