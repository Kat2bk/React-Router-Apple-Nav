import React from "react";
import { Route } from "react-router-dom";

export default function NavWrapper() {
  return (
    <nav>
      <Route path="/mac">Mac</Route>
      <Route path="/ipad">Ipad</Route>
      <Route path="/iphone">Iphone</Route>
    </nav>
  );
}
