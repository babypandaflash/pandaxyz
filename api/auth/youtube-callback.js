import passport from "../../lib/passport";
import nextConnect from "next-connect";

export default nextConnect()
  .use(passport.initialize())
  .use(passport.session())
  .get(passport.authenticate("google", {
    successRedirect: "/community",
    failureRedirect: "/"
  }));
