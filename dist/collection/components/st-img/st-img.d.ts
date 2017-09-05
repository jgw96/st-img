export declare class StImg {
    el: HTMLElement;
    src: string;
    alt: string;
    oldSrc: string;
    io: IntersectionObserver;
    componentDidLoad(): void;
    ionViewWillUpdate(): void;
    handleImage(): void;
    addIntersectionObserver(): void;
    removeIntersectionObserver(): void;
    render(): JSX.Element;
}
