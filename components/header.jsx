import React from "react"
import Link from 'next/link'

function Header() {
    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand" href="/">
    <img src="img/smc.png" alt="Logo" width="180" height="40" className="d-inline-block align-text-top"></img>
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" href="/login">Ingresar al sistema</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about"> 
          Acerca de nosotros
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header