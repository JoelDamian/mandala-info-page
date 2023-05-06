import React from "react";
import "../NavBar/navbar.css";

export default function NavBar() {
  return (
    <div class="triangle-container">
      <nav class="navbar navbar-expand-lg navbar-dark nav-bar-custom">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src="https://drive.google.com/uc?export=view&id=1vxq3uq4zC5c7lnRPfjjav3-WtDglU5FV"
              height="80"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="navbar-nav">
            <div class="d-flex align-items-center">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link font-link" style={{color: "white"}} aria-current="page" href="#">
                      Inicio
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link font-link" style={{color: "white"}} href="#">
                      Sobre Nosotros
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link font-link" style={{color: "white"}} href="#">
                      Fotos y Videos
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link font-link" style={{color: "white"}} href="#">
                      Contactanos
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="triangle"></div>
      <img src="https://drive.google.com/uc?export=view&id=1euzq3fk_uLykGGasAfDkvGP62CFFHmnR" alt="background" class="cover-image"/>
    </div>
  );
}
