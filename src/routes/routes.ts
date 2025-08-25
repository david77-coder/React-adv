
// routes.ts
import React, { lazy } from "react";
import { JsxElement } from "typescript";


export interface AppRoute {
  to: string;
  path: string;
  exact?: boolean;
  Component: React.ComponentType<any>;
  namespace: string;
}

const  LazyPage1 = lazy( () => import(/*webpackChunkName: "LazyPage1"*/ './01-lazyload/pages/LazyPage1'));
const  LazyPage2 = lazy( () => import(/*webpackChunkName: "LazyPage2"*/ './01-lazyload/pages/LazyPage2'));
const  LazyPage3 = lazy( () => import(/*webpackChunkName: "LazyPage3"*/ './01-lazyload/pages/LazyPage3'));

export const routes: AppRoute[] = [
  {
    to: "/lazy1",
    path: "/lazy1",
    exact: true,
    Component: LazyPage1,
    namespace: "Lazy 1",
  },
  {
    to: "/lazy2",
    path: "/lazy2",
    exact: true,
    Component: LazyPage2,
    namespace: "Lazy 2",
  },
  {
    to: "/lazy3",
    path: "/lazy3",
    exact: true,
    Component: LazyPage3,
    namespace: "Lazy 3",
  },
];
