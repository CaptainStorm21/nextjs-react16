import React, { Component } from "react";
import Link from "next/link";

const Header = () => (
  <>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link href="/">
            <a className="navbar-brand">
              
              </a>
          </Link>
        </nav>
      </div>
  </header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
    </nav>
  </>
);

export default Header;
