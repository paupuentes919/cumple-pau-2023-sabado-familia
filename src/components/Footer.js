import React from "react";
import "../css/Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="text">Follow me on <a href="https://www.facebook.com/pau919" target="_blank"><i class="fa-brands fa-facebook padding"  style={{color: "#21375f"}}></i></a></div>
            <div className="text">Desarrollado con <i class="fa-sharp fa-solid fa-heart fa-beat heart"></i> por Pau</div>
            <div className="text">Follow me on <a href="https://www.instagram.com/pawpuentes" target="_blank"><i class="fa-brands fa-instagram padding" style={{color: "#b628b8"}}></i></a></div>
        </div>
    );
  }
  
  export default Footer;