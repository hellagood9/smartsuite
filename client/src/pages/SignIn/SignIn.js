import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../../store/user/user.actions";

import Layout from "../../components/Common/Layout/Layout";
import Button from "../../components/Button/Button";
import Alert from "../../components/Alert/Alert";
import Spinner from "../../components/Spinner/Spinner";

import { MdBlock } from "react-icons/md";

import styles from "./SignIn.module.scss";

const SignIn = () => {
  const userSignedIn = useSelector((state) => state.userSignedIn);
  const { loading, error } = userSignedIn;

  const dispatch = useDispatch();

  const initialValues = {
    email: "jane@doe.com",
    password: "",
  };

  const [formState, setFormState] = useState(initialValues);
  const { email, password } = formState;

  const handleOnChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(signIn(email, password));
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
        <h1 className={styles["title"]}>Sign in</h1>

        {loading && <Spinner isLoading={loading} />}
        {error && (
          <Alert title="Oops ..." type="danger" icon={MdBlock}>
            <p>Email or Password incorrect</p>
          </Alert>
        )}

        <form onSubmit={handlerSubmit}>
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
            <Button disabled={false} type="terciary" label="Sign in" />
          </div>

          <div className={styles["input-row"]}>
            Dont have an account? <Link to="/signup">Create your account</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
