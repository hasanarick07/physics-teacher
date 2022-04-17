import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-7 p-7">
      <p>
        <small>Copywrite © {year} By Arick</small>
      </p>
    </footer>
  );
};

export default Footer;
