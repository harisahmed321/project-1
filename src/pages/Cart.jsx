import {Outlet, NavLink} from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <nav>
        <NavLink to="product"> View Products</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
