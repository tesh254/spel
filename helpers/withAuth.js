import React from "react";
import router from "next/router";
import { auth } from "../firebase";
import Cookie from "js-cookie";
import axios from "axios";
import Auth, { Exists } from "./getUser";

const withAuth = Component => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      const token = Auth(ctx);

      const componentProps = Component.getInitialProps
        && (await Component.getInitialProps(ctx));

      return { ...componentProps, token };
    }

    state = {
      status: "LOADING",
      user: {
        uid: ""
      }
    };

    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (authUser) {
          this.setState({
            state: "SIGNED_IN",
            user: {
              uid: authUser.uid
            }
          });
        } else {
          router.push("/auth");
        }
      });
    }

    async getToken(uid) {
      return await axios.post(process.env.TOKEN_API_URL, { uid: uid });
    }

    renderContent() {
      const { status, user } = this.state;

      if (status === "LOADING") {
        this.getToken(user.uid).then(res => {
          Cookie.set("token", res.data.token, { expires: 10 });
          if (Exists(Cookie.get("token"))){
            this.setState({
              status: "SIGNED_IN"
            })
          }
        });
      } else if (status === "SIGNED_IN") {
        return <Component {...this.props} />
      }
    }

    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};

export default withAuth;
