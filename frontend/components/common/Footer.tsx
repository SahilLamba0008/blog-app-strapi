import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex gap-4 py-8 justify-center">
      <p> &#169;2024</p>
      <Link href={"/"}>
        <p>Twitter</p>
      </Link>
      <Link href={"/"}>
        <p>Linkedin</p>
      </Link>
      <Link href={"/"}>
        <p>Email</p>
      </Link>
    </div>
  );
};

export default Footer;
