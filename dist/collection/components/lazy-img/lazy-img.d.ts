export declare class LazyImg {
    el: HTMLElement;
    src: string;
    alt: string;
    oldSrc: string;
    io: IntersectionObserver;
    componentWillLoad(): void;
    ionViewWillUpdate(): void;
    handleImage(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): JSX.Element;
}
