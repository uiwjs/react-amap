/// <reference types="react-scripts" />

declare module "*.md" {
  const value: any;
  export default value;
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}