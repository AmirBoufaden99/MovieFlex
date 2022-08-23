import "../../styles/footer.css";
import React from "react";



export default function footer() {
  return (
    <div className="footerContainer">
      <div id="aPropos">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Logo"
        />
        <p>Sophisticated simplicity for the independent mind.</p>
      </div>
      <div id="links1">
        <h5>Shop</h5>
        <a href="">Our Story </a>
        <a href="">Visit Melbourne Studio </a>
        <a href="">Visit Sydney Studio</a>
        <a href="">Visit Brisbane Studio</a>
        <a href="">Design</a>
        <a href="">How Davici Works </a>
      </div>
      <div id="links2">
        <h5>Help</h5>
        <a href="">Contact us</a>
        <a href="">Delivery </a>
        <a href="">Order history</a>
        <a href="">Visit Brisbane Studio</a>
        <a href="">Interest Free Finance</a>
        <a href="">Cipmoney </a>
      </div>
      <div id="links3">
        <h5>Services</h5>
        <a href="">Furniture Packages & Fitouts</a>
        <a href="">Trade Programme</a>
        <a href="">Visit Sydney Studio</a>
        <a href="">Sale </a>
        <a href="">New Designs </a>
        <a href="">Gift Cards </a>
      </div>
    </div>
  );
}
