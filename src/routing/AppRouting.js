import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AsyncAbout,
  AsyncHome,
  AsyncContact,
  AsyncServices,
  AsyncImagePreview,
} from "./AppRoutes";

import { HOME, ABOUT, SERVICES, CONTACT, IMG_PREVIEW } from "./routes";

export const AppRouter = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading... </div>}>
      <Routes>
        <Route exact path={HOME} element={<AsyncHome />} />
        <Route exact path={ABOUT} element={<AsyncAbout />} />
        <Route exact path={SERVICES} element={<AsyncServices />} />
        <Route
          exact
          path={IMG_PREVIEW + ":id"}
          element={<AsyncImagePreview />}
        />

        <Route exact path={CONTACT} element={<AsyncContact />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
