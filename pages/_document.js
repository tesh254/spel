import Document, { Head, Main, NextScript } from "next/document";
import "../static/css/index.scss";

export default class CustomDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="application-name" content="Spel" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="Spel" />
          <meta
            name="description"
            content="Get started with coding the easy way"
          />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon.ico"
          />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <body
          className="index"
          style={{ background: "#041720", margin: "0", padding: 0 }}
        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
