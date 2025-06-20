import passport from "passport";
import { Strategy as DiscordStrategy } from "passport-discord";
import { Strategy as TwitterStrategy } from "passport-twitter";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/discord-callback`,
  scope: ['identify']
}, (accessToken, refreshToken, profile, done) => done(null, profile)));

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CLIENT_ID,
  consumerSecret: process.env.TWITTER_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/twitter-callback`
}, (token, tokenSecret, profile, done) => done(null, profile)));

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `${process.env.BASE_URL}/api/auth/youtube-callback`
}, (token, tokenSecret, profile, done) => done(null, profile)));

export default passport;
