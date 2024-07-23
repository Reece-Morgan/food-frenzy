import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketPage from "./pages/basket";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import PageNotFound from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="basket" element={<BasketPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
