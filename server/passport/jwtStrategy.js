const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const User = require('../models/User')

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}

module.exports = passport => {
    passport.use(new JwtStrategy(opts, async (payload, done) => {
        try {
            let user = await User.findById(payload._id)
            if (!user) {
                return done(null, false)
            } else {
                return done(null, user)
            }
        } catch (error) {
            return done(error)
        }
    }))
}