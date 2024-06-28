import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/Main/Main";
import { News } from "../pages/News/News";
import { Comments } from "../pages/Comments/Comments";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/news/:id" element={<News />} />
      <Route path="/comments/:id" element={<Comments />} />
    </Routes>
  );
};
