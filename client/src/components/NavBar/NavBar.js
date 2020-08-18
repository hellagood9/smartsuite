import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Avatar from "../Avatar/Avatar";
import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { userInfo } = useSelector((state) => state.userSignedIn);

  return (
    <header className={styles["top-nav"]}>
      <Logo />
      <div className={styles["top-nav__inner"]}>
        <div className={styles["top-nav__middle"]}>
          <Search />
        </div>

        <div className={styles["top-nav__links"]}>
          <ul className={styles["list"]}>
            {!userInfo && (
              <li>
                <Link to="/signin" className={styles["cta"]}>
                  Sign in
                </Link>
              </li>
            )}
            {/* <li>
            <Link to="/favorites">Favorites</Link>
          </li> */}
          </ul>
        </div>

        <div className={styles["top-nav__right"]}>
          {userInfo && <Avatar user={userInfo} />}
          <Cart />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
