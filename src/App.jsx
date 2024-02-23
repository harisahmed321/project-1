import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RootsLayout from "./layouts/RootsLayout";
import Cart from "./pages/Cart";
import Products from './pages/Products'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootsLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cart" element={<Cart/>}>
        <Route path="product" element={<Products/>}/>
      </Route>
    
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
