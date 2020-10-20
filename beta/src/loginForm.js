import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "../src/loginForm.module.css";

export default function loginForm() {
  return (
    <div className={styles.formWrapper}>
      <h1>Login</h1>
      <form>
        <div>
          <label className={styles.label}>Email address</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label className={styles.label}>Password</label>
          <input type="text" name="name" />
        </div>
        <div>
          <Router>
            <Link to="/">Forgot your password ?</Link>
          </Router>
        </div>
        <input type="submit" value="Login" className={styles.login} />
      </form>
      <Router>
        <p>
          Don't have an account ?<Link>Sign up</Link>
        </p>
      </Router>
    </div>
  );
}
