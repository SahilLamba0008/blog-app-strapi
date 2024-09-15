import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex gap-4 py-8 justify-center w-full  bg-white dark:bg-[#090D1F]">
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
    </footer>
  );
};

export default Footer;
