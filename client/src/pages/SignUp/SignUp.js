import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../store/user/user.actions";

import Layout from "../../components/Common/Layout/Layout";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import Spinner from "../../components/Spinner/Spinner";

import { MdBlock } from "react-icons/md";

import styles from "./SignUp.module.scss";

const SignUp = (props) => {
  const userSignedUp = useSelector((state) => state.userSignedUp);
  const { loading, userInfo, error } = userSignedUp;

  useEffect(() => {
    userInfo && props.history.push("/");
  }, [userInfo, props.history]);

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const [formState, setFormState] = useState(initialValues);
  const { name, email, password, passwordConfirm } = formState;

  const handleOnChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(signUp(name, email, password));
  };

  return (
    <Layout title="Starbucks Store: Signin" description="Find your best brew!">
      <div
        className={classNames(
          styles["form"],
          styles["animated"],
          styles["fadeIn"],
          styles["fast"]
        )}
      >
        <h1 className={styles["title"]}>Sign Up</h1>

        {loading && <Spinner isLoading={loading} />}

        <form onSubmit={handlerSubmit}>
          <div className={styles["input-row"]}>
            {error && (
              <Alert title="Oops ..." type="danger" icon={MdBlock}>
                <p>Invalid User data</p>
              </Alert>
            )}
          </div>

          <div className={styles["input-row"]}>
            <label htmlFor="email">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="off"
              onChange={handleOnChange}
              value={name}
            />
          </div>

          <div className={styles["input-row"]}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="off"
              onChange={handleOnChange}
              value={email}
            />
          </div>

          <div className={styles["input-row"]}>
            <label htmlFor="email">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="off"
              onChange={handleOnChange}
              value={password}
            />
          </div>

          <div className={styles["input-row"]}>
            <label htmlFor="email">Password Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Password confirm"
              autoComplete="off"
              onChange={handleOnChange}
              value={passwordConfirm}
            />
          </div>

          <div className={styles["input-row"]}>
            <Button disabled={false} type="terciary" label="Sign Up" />
          </div>

          <div className={styles["input-row"]}>
            <span className={styles["text"]}>
              Already have an account? <Link to="/signin">Sign in</Link>
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default withRouter(SignUp);
