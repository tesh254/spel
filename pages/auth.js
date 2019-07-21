import React from "react";
import Link from "next/link";
import Head from "next/head";
import { auth, firebase } from "../firebase";
import styles from "../static/css/auth.scss";
import AuthContainer from "../components/containers/auth";
import withAuth from "../helpers/withAuth";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <div className="auth-holder">
          <AuthContainer />
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default withAuth(Home);
