import React from 'react'
import { Link } from 'react-router-dom';

function Navbar ()  {
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-dark bg-success ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PRODUCT MANAGEMENT</a>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page" href="/">HOME</Link>
        </li>
        <li class="nav-item">
          <Link to="addProduct" class="nav-link active" aria-current="page" href="/">ADD PRODUCT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
  );
}
export default Navbar;
