import Link from "next/link"
import Links from "./Links/Links"
import Image from 'next/image';

const Navbar = () => {
    return (
   <div className="header_area">
  <div className="main_menu">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container box_1620">
                        <Link href="/" className="navbar-brand logo_h">
                            <Image src="/img/logo.png" alt="site-logo" width={180} height={180} />
                        </Link>
        <div className="nav navbar-nav" id="navbarSupportedContent">
          <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><Link className="nav-link" href="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/about">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/portfolio">Portfolio</Link></li>
                                <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
)}

export default Navbar