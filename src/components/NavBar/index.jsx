import React from 'react';
import Clock from 'components/Clock';
import { Link } from 'wouter';
import './NavBar.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__start">
        <Link to="/">
          <img src="/pokemon.webp" alt="" className="pointer" />
        </Link>
      </div>
      <div className="navbar__center">
        <img src="/pokeball2.jpg" alt="icono" />
        <p className="">1048</p>
        <p className="d-none-mobile">pokemons</p>
      </div>
      <div className="navbar__end">
        <Clock />
      </div>
    </div>
  );
}
