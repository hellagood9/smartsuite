import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../../data/sidebar.menu";

import styles from "./SideBar.module.scss";

const SideBar = () => {
  return (
    <div
      className={classNames(
        styles["sidebar"],
        styles["animated"],
        styles["fadeIn"],
        styles["fast"]
      )}
    >
      {/* <div className={styles["sidebar__info"]}>We’re Delivering!</div> */}

      <div className={styles["navbar"]}>
        {Object.entries(menuItems).map((ele) => {
          const family = ele[0];
          const subCategories = ele[1];

          return (
            <ul key={family} className={styles["nav__list"]}>
              <h4 className={styles["nav__list__item-category"]}>{family}</h4>
              {subCategories.map((category) => (
                <li key={category._id} className={styles["nav__list__item"]}>
                  <NavLink
                    to={`/category/${category._id}`}
                    activeClassName={styles["selected"]}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
