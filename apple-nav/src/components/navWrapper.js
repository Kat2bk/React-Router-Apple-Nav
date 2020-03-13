import React from "react";
import { Link } from "react-router-dom";

export default function NavWrapper() {
  return (
    <nav>
      <div>
        <Link to="/ipad">Ipad</Link>
      </div>
      <div>
        <Link to="/iphone">Iphone</Link>
      </div>
    </nav>
  );
}
