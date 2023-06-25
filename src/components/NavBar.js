import React from "react";

export default function NavBar() {
  return (
    
      <header id="full_nav">
        <div class="header">
            <div class="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">

                    <a class="navbar-brand" href="/"><img src="./images/logo.png" alt="logo"/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         {/* <span class="navbar-toggler-icon"></span>  */}
                        <i class="fas fa-stream navbar-toggler-icon"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="product.html">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact Us</a>
                            </li>
                        </ul>
                        <div class="header_right">
                            <div class="text-lg-end pt-3">
                                <span>Call Us</span>
                                <span class="phone_no">+91 6747432342</span>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    </header>
  );
}
