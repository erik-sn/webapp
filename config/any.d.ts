/**
 * declaration file to appease compiler on modules that have 
 * no declarations on npm/@types. Possible to further extend
 * these as necessary.
 * 
 * Try to keep these in alphabetical order!
 */

declare module 'autoprefixer' {
  const _: any;
  export = _;
}

declare module 'extract-text-webpack-plugin' {
  const _: any;
  export = _;
}


declare module 'react-router-dom' {
  export const StaticRouter: any;
  export const BrowserRouter: any;
  export const Route: any;

  export interface IMatch {
    isExact: boolean;
    params: any;
    path: string;
    url: string;
  }

  export interface ILocation {
    key?: string;
    pathname: string;
    search: string;
    hash: string;
    state: any;
  }
}
