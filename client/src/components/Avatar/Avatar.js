import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import avatar from "../../assets/img/avatar.png";
import styles from "./Avatar.module.scss";

const Avatar = ({ user }) => {
  return (
    <div className={styles["avatar"]}>
      <Link to="/">
        <span className={styles["avatar__img"]}>
          <img src={avatar} alt={user && user.name} />
        </span>

        <div className={styles["user"]}>
          <span className={styles["user__greet"]}>Hello</span>
          <span className={styles["user__name"]}>{user && user.name}</span>
        </div>
      </Link>
    </div>
  );
};

Avatar.defaultProps = {
  user: {},
};

Avatar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Avatar;
