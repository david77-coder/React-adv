
// routes.ts
import React, { lazy } from "react";
import NoLazy from "./01-lazyload/pages/NoLazy";



export interface AppRoute {
  path: string;
  exact?: boolean;
  Component: React.ComponentType<any> |  React.LazyExoticComponent<React.ComponentType<any>>;
  namespace: string;
}

// const  LazyPage1 = lazy( () => import(/*webpackChunkName: "LazyPage1"*/ './01-lazyload/pages/LazyPage1'));
// const  LazyPage2 = lazy( () => import(/*webpackChunkName: "LazyPage2"*/ './01-lazyload/pages/LazyPage2'));
// const  LazyPage3 = lazy( () => import(/*webpackChunkName: "LazyPage3"*/ './01-lazyload/pages/LazyPage3'));

const LazyLayout = lazy( () => import(/*webpackChunkName: "LazyLayout"*/ './01-lazyload/layout/LazyLayout'));

export const routes: AppRoute[] = [
  {
    path: "/lazy1",
    Component: LazyLayout,
    namespace: "LazyLoadin Nested",
  },
  {
    path: "/NoLazy",
    Component: NoLazy,  
    namespace: "NoLazy component",
  }

];
