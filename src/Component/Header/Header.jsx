import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from '../../assets/movix-logo.svg'
import ContentWrapper from "../ContentWrapper/ContentWrapper";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
};

const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
};

  return (
    <header className={`header ${mobileMenu?'mobileView':""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <ul className="menuItems">
          <li className="menuItem">movies</li>
          <li className="menuItem">Tv Shows</li>
          <li className="menuItem">

            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobileMenuItems ">
          <HiOutlineSearch />
          {mobileMenu ? <VscChromeClose  onClick={()=> setMobileMenu(false)}/> : <SlMenu  onClick={openMobileMenu}/>}
        </div>
      </ContentWrapper>
    </header>
  );
};

export default Header;