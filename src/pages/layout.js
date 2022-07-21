import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {

  
  return (
    <div>
      <nav>
        
      </nav>

      <footer>Copyright theonyekagroup</footer>
      <Outlet />
    </div>
  );
}
