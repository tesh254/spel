import Router from "next/router";
import { auth, firebase, user, users } from "../../firebase";

export const googleAuth = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth
    .signInWithPopup(provider)
    .then(socialAuthUser => {
      return user(socialAuthUser.user.uid).set({
        name: socialAuthUser.user.displayName,
        username: socialAuthUser.user.email,
        email: socialAuthUser.user.email,
        avatar: socialAuthUser.user.photoURL,
        roles: {}
      });
    })
    .then(() => {
      Router.push("/");
    })
    .catch(err => {
      Router.push("/auth");
      alert("Something went wrong, try again");
    });
};

export const twitterAuth = () => {
  const provider = new firebase.auth.TwitterAuthProvider();

  auth
    .signInWithPopup(provider)
    .then(socialAuthUser => {
      return user(socialAuthUser.user.uid).set({
        name: socialAuthUser.additionalUserInfo.profile.name,
        username: socialAuthUser.additionalUserInfo.username,
        email: socialAuthUser.additionalUserInfo.profile.email || null,
        role: {},
        avatar: socialAuthUser.user.photoURL
      });
    })
    .then(() => {
      Router.push("/");
    })
    .catch(err => {
      Router.push("/auth");
      console.log(err);
      alert("Something went wrong, try again");
    });
};

export const githubAuth = () => {
  const provider = new firebase.auth.GithubAuthProvider();

  auth
    .signInWithPopup(provider)
    .then(socialAuthUser => {
      console.log(socialAuthUser);
      return user(socialAuthUser.user.uid).set({
        name: socialAuthUser.additionalUserInfo.profile.name,
        username: socialAuthUser.additionalUserInfo.username,
        email: socialAuthUser.additionalUserInfo.profile.email || null,
        role: {},
        avatar: socialAuthUser.user.photoURL
      });
    })
    .then(() => {
      Router.push("/");
    })
    .catch(err => {
      Router.push("/auth");
      alert("Something went wrong, try again");
    });
};

export const handleLogout = () => {
  auth.signOut().then(() => {
    
  })
}
