import React from "react";
import Link from "next/link";
import Head from "next/head";
import Nav from "../components/nav";
import styles from "../static/css/index.scss";

class Home extends React.Component {

  render() {
    return (
      <div> 
        <Head>
          <title>Home</title>
        </Head>

        <Nav />

        <div className="hero">Hello world</div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Home;
