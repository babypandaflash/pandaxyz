import passport from "../../lib/passport";
import nextConnect from "next-connect";

export default nextConnect().use(passport.initialize()).get(passport.authenticate("discord"));
