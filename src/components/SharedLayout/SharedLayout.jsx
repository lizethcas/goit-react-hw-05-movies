import { Suspense } from "react";

import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav className="nav">
          <NavLink to="/goit-react-hw-05-movies/" className="activeLink">
            Home
          </NavLink>
          <NavLink to="/movies" className="activeLink">
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default SharedLayout;
