import React from "react";

import { MdSearch } from "react-icons/md";

import styles from "./Search.module.scss";

const Search = () => {
  return (
    <div className={styles["search"]}>
      <MdSearch />

      <label htmlFor="search">Search</label>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="Search for items, categories and more …"
        autoComplete="off"
      />
    </div>
  );
};

export default Search;
