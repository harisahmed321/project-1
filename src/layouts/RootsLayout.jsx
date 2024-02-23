import {NavLink, Outlet} from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
export default function RootsLayout() {
  return (
    <>
      <nav>
        <h1>React Router Breadcrumbs </h1>
        <NavLink to='/'>Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="cart">Cart</NavLink>
      </nav>
      <Breadcrumbs />
      <Outlet />
    </>
  );
}
