import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
          <Nav.Link href="/">Inicio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="servicios" href="/servicios">
            Servicios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/accesorios">Accesorios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ventas">Ventas</Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </div>
  );
};

export default NavBar;
