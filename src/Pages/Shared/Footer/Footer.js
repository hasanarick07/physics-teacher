import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-7 text-white text-xl p-7">
      <h4>
        <small>Copywrite © {year} By Arick</small>
      </h4>
    </footer>
  );
};

export default Footer;
