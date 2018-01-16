export declare class StImg {
    private io;
    el: HTMLElement;
    loadSrc: string;
    fit: boolean;
    alt: string;
    src: string;
    srcChanged(): void;
    componentDidLoad(): void;
    private addIntersectionObserver();
    private removeIntersectionObserver();
    render(): JSX.Element;
}
