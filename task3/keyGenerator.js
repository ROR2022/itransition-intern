//const crypto = require('crypto');
import crypto from 'crypto';

export class KeyGenerator {
    constructor() {
        this.key = crypto.randomBytes(32); // 256-bit key
    }

    generateHMAC(message) {
        const hmac = crypto.createHmac('sha256', this.key);
        hmac.update(message);
        return hmac.digest('hex');
    }

    getKey() {
        //console.log(this.key);
        return this.key.toString('hex');
    }
}
