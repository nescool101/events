/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function DemoFooter() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=573124894828&text=Hola%2C%20deseo%20adquirir%20un%20soporte%20con%20ustedes"
                  target="_blank"
                >
                  Contacto
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=573124894828&text=Hola%2C%20deseo%20ser%20un%20proveedor"
                  target="_blank"
                >
                  Trabaja con Nosotros
                </a>
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                >
                  Others
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()},hecho por {" "}
              <i className="fa fa-heart heart" />  1DealTech sas
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default DemoFooter;
