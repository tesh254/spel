import React from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "../static/css/home.scss";
import withAuth from "../helpers/withAuth.js";

class Home extends React.Component {
  static async getInitialProps(ctx) {
    const { isServer, token } = ctx;
    return { isServer, token }
  }
  render() {
    console.log(this.props)
    return (
      <div> 
        <Head>
          <title>Home</title>
        </Head>

        <div className="home-content">Hello world</div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default withAuth(Home);
