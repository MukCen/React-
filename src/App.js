import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomePage, UserPage, PostPage,AboutPage } from "./pages";
import { MainLayout } from "./layouts";

const App = () => {
  return (
    <div>
      
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={'users'} element={<UserPage />} />
          <Route path={'posts'} element={<PostPage />} />
          <Route path={'about'} element={<AboutPage />} />
        </Route>
      
       

      </Routes>
    </div>
   
  );
  
  
};

export { App };
