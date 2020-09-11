import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import { menuItems } from "../../../data/sidebar.menu";

import { MdExpandMore } from "react-icons/md";

import styles from "./SubMenu.module.scss";

const SubMenu = () => {
  return (
    <div
      className={classNames(
        styles["sidebar"],
        styles["animated"],
        styles["fadeIn"],
        styles["fast"]
      )}
    >
      {/* <div className={styles["nav-wrapper"]}> */}
      {/* <div className={styles["nav-wrapper"]}> */}
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {Object.entries(menuItems).map((ele) => {
          const family = ele[0];
          const subCategories = ele[1];

          return (
            <li key={family} className={styles["nav__list__category"]}>
              <span className={styles["has-sub"]}>
                {family}
                <MdExpandMore />
              </span>

              <div className={styles["nav-dropdown"]}>
                <ul className={styles["nav__list"]}>
                  {subCategories.map((category) => (
                    <li
                      key={category._id}
                      className={styles["nav__list__item"]}
                    >
                      <img
                        src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_tight_288"
                        alt={category.title}
                        style={{
                          width: "64px",
                          height: "64px",
                          marginRight: "8px",
                          borderRadius: "50%",
                        }}
                      />
                      <NavLink
                        to={`/category/${category._id}`}
                        activeClassName={styles["selected"]}
                      >
                        {category.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
      {/* </div> */}

      {/* <div className={styles["nav-wrapper"]}>
        {Object.entries(menuItems).map((ele) => {
          const family = ele[0];
          const subCategories = ele[1];

          return (
            <div key={family}>
              <h4 className={styles["nav__list__category"]}>{family}</h4>
              <ul className={styles["nav__list"]}>
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
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default SubMenu;
