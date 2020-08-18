import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Avatar.module.scss";

const Avatar = ({ user }) => {
  const { name, imgUrl } = user;

  return (
    <div className={styles["avatar"]}>
      <Link to="/">
        <span className={styles["avatar__img"]}>
          <img loading="lazy" src={`/img/${imgUrl}`} alt={name} />
        </span>

        <div className={styles["user"]}>
          <span className={styles["user__greet"]}>Hello</span>
          <span className={styles["user__name"]}>{name}</span>
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
