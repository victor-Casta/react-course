import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import './Navbar.css';

function Navbar() {
  const mobileMenu = useRef(null);

  const toggleMenu = () => {
    if (mobileMenu.current) {
      mobileMenu.current.classList.toggle('block');
      mobileMenu.current.classList.toggle('hidden');
    } else {
      console.error('ref in menu is null');
    }
  };

  const closeMenu = () => {
    if (mobileMenu.current) {
      mobileMenu.current.classList.add('hidden');
      mobileMenu.current.classList.remove('block');
    } else {
      console.error('ref in menu is null');
    }
  };

  return (
    <>
      <nav>
        <section className="logo">
          <h2>PUREM <br /> ODA</h2>
        </section>
        <section className="links">
          <ul>
            <li>
              <NavLink to={'/womenswear'}>
                womenswear
              </NavLink>
            </li>
            <li>
              <NavLink to={'/menswear'}>
                menswear
              </NavLink>
            </li>
            <li>
              <NavLink to={'/kids'}>
                kids
              </NavLink>
            </li>
            <li>
              <NavLink to={'/sale'}>
                sale
              </NavLink>
            </li>
            <li>
              <NavLink to={'/discover'}>
                discover
              </NavLink>
            </li>
          </ul>
        </section>
        <section className="actions">
          <div className="search">
            <RiSearchLine className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <CiHeart size={23} className="heart-icon" />
          <div className="shopping-car">
            <IoCartOutline size={23} className="car-icon" />
            <span>2</span>
          </div>
          <CgMenuRightAlt className="burguer-menu" size={23} onClick={toggleMenu} />
        </section>
      </nav>
      <div className="mobile-menu hidden" ref={mobileMenu}>
        <IoCloseCircleOutline size={32} className="close-icon" onClick={closeMenu} />
        <section className="links-mobile">
          <ul>
            <li>
              <NavLink to={'/womenswear'}>
                womenswear <IoIosArrowForward />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/menswear'}>
                menswear <IoIosArrowForward />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/kids'}>
                kids <IoIosArrowForward />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/sale'}>
                sale <IoIosArrowForward />
              </NavLink>
            </li>
            <li>
              <NavLink to={'/discover'}>
                discover <IoIosArrowForward />
              </NavLink>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}

export { Navbar };
