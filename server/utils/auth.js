const path = require('path');
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
    // creates json web token encoded with information from payload variable
    signToken: function ({ firstName, lastName, email, _id }) {
        const payload = { firstName, lastName, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },

    authMiddleware: function ({ req }) {
        // allows token to be sent via req.body, req.query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;
        // separates "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
                .split(' ')
                .pop()
                .trim();
        }

        if (!token) {
            return req;
        }

        try {
            // decodes and attaches user data to request object
            const { data } = jwt.verify(token, secret, { expiresAt: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        return req;
    }
};