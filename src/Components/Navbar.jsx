import React from "react"
import {Link} from "react-router-dom";

function Navbar(){

return (
<div className="navbar-row row">

<div className="col-auto">
<Link to="/" className="nav-link">
  <p>Hacker News</p>
</Link>
</div>

<div className="col-auto">
<Link to="/new" className="nav-link">
  <p>new</p>
</Link>
</div>

</div>

);
}

export default Navbar;
