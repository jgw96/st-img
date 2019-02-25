/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface StImg {
    'alt': string;
    'src': string;
  }
  interface StImgAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'src'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StImg': Components.StImg;
  }

  interface StencilIntrinsicElements {
    'st-img': Components.StImgAttributes;
  }


  interface HTMLStImgElement extends Components.StImg, HTMLStencilElement {}
  var HTMLStImgElement: {
    prototype: HTMLStImgElement;
    new (): HTMLStImgElement;
  };

  interface HTMLElementTagNameMap {
    'st-img': HTMLStImgElement
  }

  interface ElementTagNameMap {
    'st-img': HTMLStImgElement;
  }


}
