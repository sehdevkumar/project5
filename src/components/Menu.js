import React from 'react'

function Menu() {
    return (
      <>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            background: "#FFFFFF",
            boxShadow: "2px 1px 6px -2px rgba(0,0,0,0.3)",
          }}
        >
          <div
            class="navbar-brand"
            style={{
              fontWeight: "bold",
            }}
          >
            Design Agency Home Page
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse navbar-right"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ml-auto navbar-right">
              <li class="nav-item active">
                <div class="nav-link">Landing</div>
              </li>
              <li class="nav-item active">
                <div class="nav-link">
                  Home <span class="sr-only">(current)</span>
                </div>
              </li>
              <li class="nav-item">
                <div class="nav-link">About</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Contact</div>
              </li>
              <li class="nav-item ">
                <div class="nav-link">Blog</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Case Study</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Portfolio</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Project 1</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Project 2</div>
              </li>
              <li class="nav-item">
                <div class="nav-link">Project 3</div>
              </li>
              <li>
                <img
                  class="nav-link"
                  style={{ width: "50px", background: "none" }}
                  alt="cart"
                  src="https://e7.pngegg.com/pngimages/376/759/png-clipart-black-shopping-cart-icon-computer-icons-grocery-store-shopping-cart-icon-shopping-basket-miscellaneous-angle.png"
                />
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Menu
