const jtw = require('jsonwebtoken');
const secret = 'shhhhh';

function createToken(data) {
    return jtw.sign(data, secret, {expiresIn: '24h'});
}

function verifyToken(token) {
    return new Promise((res, rej) => {
        jtw.verify(token, secret, (err, data) => {
            if (err) return rej(err);
            return res(data);
        })
    });
}

module.exports = {
    createToken,
    verifyToken
}