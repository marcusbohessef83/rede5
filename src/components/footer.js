import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
                A Agência REDE5 conta com mais de anos de experiência no mercado de tecnologia 
                e oferece soluções digitais com qualidade garantindo total satisfação dos clientes
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Contato</h3>
              
            <p>
                E: <a href="#">rede5@rede5.com.br/a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">Social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>Twitter
                  </a>
                </li>
                
               
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © Desenvolvidor {new Date().getFullYear()} por{" "}
              <a href="#">rede5.com.br</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
