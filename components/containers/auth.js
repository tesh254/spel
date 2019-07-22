import React from "react";
import Link from "next/link";
import { auth, firebase, user, users } from "../../firebase";
import styles from "../../static/css/auth.scss";
import { googleAuth, twitterAuth , githubAuth} from "../../app/auth";

class Auth extends React.Component {
  handleGoogleSignIn = () => {
    googleAuth();
  };

  handleTwitterSignin = () => {
    twitterAuth();
  }

  handleGithubAuth = () => {
    githubAuth()
  }

  handleLogout = () => {
    auth
      .signOut()
      .then(function() {
        alert("Logout successful");
      })
      .catch(function(error) {
        alert("OOps something went wrong check your console");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="auth-content">
          <h1 className="title">
            Join {" "}
            <img
              src="/static/img/logo.svg"
              alt="mascot-logo"
              className="logo"
              style={{
                width: 55 + "px",
                paddingTop: "5px",
                verticalAlign: "middle"
              }}
            />
          </h1>
          <div className="row">
            <button
              onClick={this.handleGoogleSignIn}
              className="google-button_holder"
            >
              <img
                src="/static/img/google_logo.svg"
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "8px -8px 8px 8px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  boxSizing: "border-box"
                }}
                alt="google-logo"
              />
              <span className="google-button_text">Sign In with Google</span>
            </button>
            <button
              onClick={this.handleTwitterSignin}
              className="google-button_holder move-down"
            >
              <img
                src="/static/img/twitter_logo.svg"
                style={{
                  width: "30px",
                  height: "30px",
                  margin: "4px -14px 4px 4px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  boxSizing: "border-box"
                }}
                alt="google-logo"
              />
              <span className="google-button_text">Sign In with Twitter</span>
            </button>
            <button
              onClick={this.handleGithubAuth}
              className="google-button_holder move-down"
            >
              <img
                src="/static/img/github_logo.svg"
                style={{
                  width: "20px",
                  height: "20px",
                  margin: "8px -8px 8px 8px",
                  display: "inline-block",
                  verticalAlign: "middle",
                  boxSizing: "border-box"
                }}
                alt="google-logo"
              />
              <span className="google-button_text">Sign In with Github</span>
            </button>
            <p className="statement">
              We require social login to prevent abuse
            </p>
          </div>
        </div>
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Auth;
