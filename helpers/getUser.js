import { auth, firebase, user } from "../firebase";
import nextCookies from "next-cookies";
import Router from "next/router";
import Decoder from "jwt-decode";

const getPayloadFromToken = token => {
  return Decoder(token);
};

export const Exists = token => {
  const { data } = getPayloadFromToken(token);
  const uid = data;
  return user(uid).on("value", snapshot => {
    console.log("FireB", snapshot);
    if (snapshot && snapshot.exists()) {
      return true;
    } else {
      return false;
    }
  });
};

export default ctx => {
  const { token } = nextCookies(ctx);

  if (ctx.req && !token) {
    // ctx.res.writeHead(302, { Location: "/auth" });
    // ctx.res.end();
    return;
  }
};
