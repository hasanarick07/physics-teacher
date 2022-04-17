import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          color: match ? "black" : "white",
          fontWeight: match ? 700 : "",
          padding: 7,
          borderBottom: 2,
          borderBottomColor: match ? "black" : "white",
          borderBottomStyle: "solid",
          borderBottomLeftRadius: [-20],
          borderBottomRightRadius: 10,
          marginBottom: 100,
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
