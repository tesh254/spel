import React from "react";
import App, { Container } from "next/app";
import styles from "../static/css/index.scss";

class Spel extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div className="index" data-theme="dark">
          <Component {...pageProps} />
        </div>
      </Container>
    );
  }
}

export default Spel;
