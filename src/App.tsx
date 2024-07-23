import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasketPage from "./pages/basket";
import HomePage from "./pages/home";
import Layout from "./pages/layout";
import PageNotFound from "./pages/404";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="basket" element={<BasketPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
