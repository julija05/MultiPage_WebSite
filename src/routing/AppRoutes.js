import { lazy } from "react";

//HomePage
export const AsyncHome = lazy(() => import("../ui/pages/Home"));
//AboutPage
export const AsyncAbout = lazy(() => import("../ui/pages/About"));
//ServicesPage
export const AsyncServices = lazy(() => import("../ui/pages/Services"));
// Image preview
export const AsyncImagePreview = lazy(() => import("../ui/pages/ImagePreview"));
//ContactPage
export const AsyncContact = lazy(() => import("../ui/pages/Contact"));
