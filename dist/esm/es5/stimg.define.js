
// stimg: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './stimg.core.js';
import { COMPONENTS } from './stimg.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
